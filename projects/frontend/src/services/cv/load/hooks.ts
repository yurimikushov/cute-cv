import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsSignedIn } from 'services/auth'
import { selectIsLoading } from './selectors'
import { load } from './thunks'

const useIsCVLoading = () => {
  const isCVLoading = useSelector(selectIsLoading)

  return {
    isCVLoading,
  }
}

const useLoadCV = () => {
  const dispatch = useDispatch()
  const { isSignedIn } = useIsSignedIn()

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    dispatch(load())
  }, [isSignedIn])
}

export { useLoadCV, useIsCVLoading }
