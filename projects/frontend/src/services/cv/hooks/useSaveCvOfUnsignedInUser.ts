import { useState } from 'react'
import isNull from 'lodash/isNull'
import useEffectWhen from 'hooks/useEffectWhen'
import cvApi from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import { useAddCv, useUpdateCvMetadata, useDeleteCv } from '../versions'
import { useSaveCv } from '../save'

const useSaveCvOfUnsignedInUser = () => {
  const { isSignedIn } = useIsSignedIn()
  const addCv = useAddCv()
  const deleteCv = useDeleteCv()
  const saveCv = useSaveCv()
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

  const handleCopy = async (name: string) => {
    if (!isSignedIn || isNull(cv)) {
      return
    }

    const { metadata, content } = cv

    const { id, number } = addCv({
      metadata: {
        ...metadata,
        name,
      },
      content,
    })

    try {
      const { savedAt } = await saveCv({ id, number, name, cv: content })

      updateCvMetadata({
        id,
        isNew: false,
        isSaved: Boolean(savedAt),
        savedAt,
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
