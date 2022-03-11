import { useEffect, useRef } from 'react'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
import { useIsSignedIn } from 'services/auth'
import { useLoadCV } from '../load'
import { useCurrentCvMetadata, useUpdateCv } from '../versions'

const useAutoLoadCurrentCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const { id, isNew } = useCurrentCvMetadata()
  const loadCv = useLoadCV()
  const updateCv = useUpdateCv()
  const prevIdRef = useRef(id)

  const loadCvOfUnsignedInUser = () => {
    const cv = cvApi.loadCvOfUnsignedInUser()

    if (isNull(cv)) {
      return
    }

    updateCv({
      id,
      ...cv,
    })
  }

  const loadCvOfSignedInUser = (id: string) => {
    loadCv(id).then(({ metadata, content }) => {
      updateCv({
        id,
        metadata,
        content,
      })
    })
  }

  useEffect(() => {
    if (!isSignedIn) {
      loadCvOfUnsignedInUser()
      return
    }

    if (isNew || prevIdRef.current === id) {
      return
    }

    prevIdRef.current = id

    loadCvOfSignedInUser(id)
  }, [isSignedIn, id, isNew])
}

export default useAutoLoadCurrentCv
