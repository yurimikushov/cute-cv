import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from './selectors'
import { SetUserPayloadT } from './model'
import { reset, set } from './slice'

const useUser = () => {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const handleSet = useCallback((payload: SetUserPayloadT) => {
    dispatch(set(payload))
  }, [])

  const handleReset = useCallback(() => {
    dispatch(reset())
  }, [])

  return { user, handleSet, handleReset }
}

export { useUser }
