import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsSignedIn } from 'services/auth'
import { useCurrentCvMetadata } from 'services/cv'
import { selectIsLoading } from './selectors'
import { loadAll, load } from './thunks'

const useIsCVLoading = () => {
  const isCVLoading = useSelector(selectIsLoading)

  return {
    isCVLoading,
  }
}

const useLoadAllCV = () => {
  const dispatch = useDispatch()
  const { isSignedIn } = useIsSignedIn()

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    dispatch(loadAll())
  }, [isSignedIn])
}

const useLoadCV = () => {
  const { id } = useCurrentCvMetadata()
  const dispatch = useDispatch()
  const { isSignedIn } = useIsSignedIn()

  useEffect(() => {
    if (!isSignedIn) {
      return
    }

    dispatch(load(id))
  }, [isSignedIn, id])
}

export { useLoadAllCV, useLoadCV, useIsCVLoading }
