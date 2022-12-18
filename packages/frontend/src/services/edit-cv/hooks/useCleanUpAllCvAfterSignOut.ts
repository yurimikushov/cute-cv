import { useEffect, useRef } from 'react'
import { useIsSignedIn } from 'services/auth'
import {
  useAddEmptyCv,
  useAllCvMetadata,
  useDeleteCv,
  useSelectCv,
} from '../versions'

const useCleanUpAllCvAfterSignOut = () => {
  const { isSignedIn } = useIsSignedIn()
  const isSignInPrevRef = useRef(isSignedIn)
  const allCv = useAllCvMetadata()
  const selectCv = useSelectCv()
  const addEmptyCv = useAddEmptyCv()
  const deleteCv = useDeleteCv()

  useEffect(() => {
    const { current: isSignInPrev } = isSignInPrevRef

    if (!isSignInPrev || isSignedIn) {
      isSignInPrevRef.current = isSignedIn
      return
    }

    const { id: newCvId } = addEmptyCv()
    selectCv(newCvId)

    allCv.forEach(({ id }) => {
      deleteCv(id)
    })
  }, [isSignedIn])
}

export default useCleanUpAllCvAfterSignOut
