import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './selectors'
import { SetUserPayload } from './model'
import { reset, set } from './slice'

const useUser = () => {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const handleSet = useCallback((payload: SetUserPayload) => {
    dispatch(set(payload))
  }, [])

  const handleReset = useCallback(() => {
    dispatch(reset())
  }, [])

  return { user, handleSet, handleReset }
}

export { useUser }
