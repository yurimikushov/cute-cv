import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isNull from 'lodash/isNull'
import pick from 'lodash/pick'
import { useSignInState } from 'services/auth'
import { set, reset } from './slice'
import { selectUser } from './selectors'

const useLoadUser = () => {
  const signInState = useSignInState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isNull(signInState)) {
      dispatch(reset())
      return
    }

    const { user } = signInState
    dispatch(set({ user: pick(user, ['uid', 'displayName', 'email']) }))
  }, [signInState])
}

const useUser = () => {
  const user = useSelector(selectUser)
  return user
}

export { useLoadUser, useUser }
