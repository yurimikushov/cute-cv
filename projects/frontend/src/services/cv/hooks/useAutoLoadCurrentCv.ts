import { useEffect } from 'react'
import { useIsSignedIn } from 'services/auth'
import { useLoadCV } from '../load'
import { useCurrentCvMetadata } from '../versions'

const useAutoLoadCurrentCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const { id, isNew } = useCurrentCvMetadata()
  const loadCv = useLoadCV()

  useEffect(() => {
    if (!isSignedIn || isNew) {
      return
    }

    loadCv(id)
  }, [isSignedIn, id, isNew])
}

export default useAutoLoadCurrentCv
