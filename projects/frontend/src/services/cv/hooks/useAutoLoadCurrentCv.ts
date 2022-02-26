import { useEffect } from 'react'
import { useIsSignedIn } from 'services/auth'
import { useLoadCV } from '../load'
import { useCurrentCvMetadata, useUpdateCv } from '../versions'

const useAutoLoadCurrentCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const { id, isNew } = useCurrentCvMetadata()
  const loadCv = useLoadCV()
  const updateCv = useUpdateCv()

  useEffect(() => {
    if (!isSignedIn || isNew) {
      return
    }

    loadCv(id).then((cv) => {
      updateCv(cv)
    })
  }, [isSignedIn, id, isNew])
}

export default useAutoLoadCurrentCv
