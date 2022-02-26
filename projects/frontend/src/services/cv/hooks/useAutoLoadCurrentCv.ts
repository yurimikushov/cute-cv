import { useEffect, useRef } from 'react'
import { useIsSignedIn } from 'services/auth'
import { useLoadCV } from '../load'
import { useCurrentCvMetadata, useUpdateCv } from '../versions'

const useAutoLoadCurrentCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const { id, isNew } = useCurrentCvMetadata()
  const loadCv = useLoadCV()
  const updateCv = useUpdateCv()
  const prevIdRef = useRef(id)

  useEffect(() => {
    if (prevIdRef.current === id) {
      return
    }

    prevIdRef.current = id

    if (!isSignedIn || isNew) {
      return
    }

    loadCv(id).then((cv) => {
      updateCv(cv)
    })
  }, [isSignedIn, id, isNew])
}

export default useAutoLoadCurrentCv
