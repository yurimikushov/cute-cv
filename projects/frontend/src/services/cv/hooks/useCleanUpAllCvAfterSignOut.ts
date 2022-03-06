import { useEffect, useRef } from 'react'
import forEach from 'lodash/forEach'
import { useIsSignedIn } from 'services/auth'
import {
  useAddCv,
  useAllCvMetadata,
  useDeleteCv,
  useSelectCv,
} from '../versions'

const useCleanUpAllCvAfterSignOut = () => {
  const { isSignedIn } = useIsSignedIn()
  const isSignInPrevRef = useRef(isSignedIn)
  const allCv = useAllCvMetadata()
  const selectCv = useSelectCv()
  const addCv = useAddCv()
  const deleteCv = useDeleteCv()

  useEffect(() => {
    const { current: isSignInPrev } = isSignInPrevRef

    if (!isSignInPrev || isSignedIn) {
      isSignInPrevRef.current = isSignedIn
      return
    }

    const newCvId = addCv('Dummy')
    selectCv(newCvId)

    forEach(allCv, ({ id }) => {
      deleteCv(id)
    })
  }, [isSignedIn])
}

export default useCleanUpAllCvAfterSignOut
