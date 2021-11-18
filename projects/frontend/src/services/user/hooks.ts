import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import isNull from 'lodash/isNull'
import { useAuthState } from 'services/auth'
import { set } from './slice'

const useLoadUser = () => {
  const authState = useAuthState()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isNull(authState)) {
      return
    }

    const { user } = authState
    dispatch(set({ user }))
  }, [authState])
}

export { useLoadUser }
