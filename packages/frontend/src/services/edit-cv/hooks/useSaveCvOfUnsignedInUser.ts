import { useState } from 'react'
import useEffectWhen from 'shared/hooks/useEffectWhen'
import cvApi from 'shared/api/cv'
import { useAuth } from 'services/auth'
import { useAddCv as useAddCvOnBackend } from '../add'
import {
  useAddCv as useAddCvInStore,
  useUpdateCvMetadata,
  useDeleteCv,
  useSelectCv,
} from '../versions'

const useSaveCvOfUnsignedInUser = () => {
  const { isSignedIn } = useAuth()
  const addCvInStore = useAddCvInStore()
  const addCvOnBackend = useAddCvOnBackend()
  const deleteCv = useDeleteCv()
  const selectCv = useSelectCv()
  const updateCvMetadata = useUpdateCvMetadata()
  const [cv, setCv] = useState<ReturnType<
    typeof cvApi.loadCvOfUnsignedInUser
  > | null>(null)

  useEffectWhen(() => {
    const cv = cvApi.loadCvOfUnsignedInUser()

    if (!cv) {
      return
    }

    setCv(cv)
  }, isSignedIn)

  const handleCopy = async (name: string, allowShare: boolean) => {
    if (!isSignedIn || !cv) {
      return
    }

    const { metadata, content } = cv

    const { id, number } = addCvInStore({
      metadata: {
        ...metadata,
        name,
      },
      content,
    })

    try {
      const metadata = await addCvOnBackend({
        number,
        name,
        allowShare,
        cv: content,
      })

      updateCvMetadata({
        ...metadata,
        id,
        isNew: false,
        isSaved: true,
      })

      cvApi.deleteCvOfUnsignedInUser()

      selectCv(id)
    } catch {
      deleteCv(id)
    }
  }

  return {
    isExists: Boolean(cv),
    copy: handleCopy,
  }
}

export default useSaveCvOfUnsignedInUser
