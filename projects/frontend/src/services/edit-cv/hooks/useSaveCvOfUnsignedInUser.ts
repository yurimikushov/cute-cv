import { useState } from 'react'
import isNull from 'lodash/isNull'
import useEffectWhen from 'hooks/useEffectWhen'
import cvApi from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import { useAddCv as useAddCvOnBackend } from '../add'
import {
  useAddCv as useAddCvInStore,
  useUpdateCvMetadata,
  useDeleteCv,
} from '../versions'

const useSaveCvOfUnsignedInUser = () => {
  const { isSignedIn } = useIsSignedIn()
  const addCvInStore = useAddCvInStore()
  const addCvOnBackend = useAddCvOnBackend()
  const deleteCv = useDeleteCv()
  const updateCvMetadata = useUpdateCvMetadata()
  const [cv, setCv] = useState<ReturnType<
    typeof cvApi.loadCvOfUnsignedInUser
  > | null>(null)

  useEffectWhen(() => {
    const cv = cvApi.loadCvOfUnsignedInUser()

    if (isNull(cv)) {
      return
    }

    setCv(cv)
  }, isSignedIn)

  const handleCopy = async (name: string, allowShare: boolean) => {
    if (!isSignedIn || isNull(cv)) {
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
        isNew: false,
        isSaved: true,
      })
    } catch {
      deleteCv(id)
    }

    cvApi.deleteCvOfUnsignedInUser()
  }

  return {
    isExists: !isNull(cv),
    copy: handleCopy,
  }
}

export default useSaveCvOfUnsignedInUser
