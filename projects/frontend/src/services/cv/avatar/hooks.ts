import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update, erase } from './slice'
import { selectAvatar } from './selectors'
import { UpdatePayloadT } from './model'

const useAvatar = () => {
  const src = useSelector(selectAvatar)

  const dispatch = useDispatch()

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  const handleDelete = useCallback(() => {
    dispatch(erase())
  }, [])

  return {
    src,
    handleChange,
    handleDelete,
  }
}

export { useAvatar }
