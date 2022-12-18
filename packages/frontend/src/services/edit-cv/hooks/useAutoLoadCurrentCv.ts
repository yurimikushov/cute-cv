import { useEffect, useRef } from 'react'
import defer from 'lodash/defer'
import cvApi from 'shared/api/cv'
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

    if (!cv) {
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

    // update prev id after executing this effect
    defer(() => {
      prevIdRef.current = id
    })

    if (isNew || prevIdRef.current === id) {
      return
    }

    loadCvOfSignedInUser(id)
  }, [isSignedIn, id, isNew])
}

export default useAutoLoadCurrentCv
