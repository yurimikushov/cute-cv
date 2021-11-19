import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import isNull from 'lodash/isNull'
import { useSignInState } from 'services/auth'
import { set, reset } from './slice'

const useLoadUser = () => {
  const signInState = useSignInState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isNull(signInState)) {
      dispatch(reset())
      return
    }

    const { user } = signInState
    dispatch(set({ user }))
  }, [signInState])
}

export { useLoadUser }
