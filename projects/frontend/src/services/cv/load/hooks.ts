import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsSignedIn } from 'services/auth'
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
  const { isSignedIn } = useIsSignedIn()

  const dispatch = useDispatch()

  const handleLoadCv = (id: string) => {
    if (!isSignedIn) {
      return
    }

    dispatch(load(id))
  }

  return handleLoadCv
}

export { useLoadAllCV, useLoadCV, useIsCVLoading }
