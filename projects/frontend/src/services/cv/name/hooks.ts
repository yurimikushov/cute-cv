import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './slice'
import { selectFullName } from './selectors'
import { UpdatePayloadT } from './model'

const useFullName = () => {
  const fullName = useSelector(selectFullName)

  const dispatch = useDispatch()

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    fullName,
    handleChange,
  }
}

export { useFullName }