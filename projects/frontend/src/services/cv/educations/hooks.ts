import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update, erase } from './slice'
import { selectEducations } from './selectors'
import { DeletePayloadT, UpdatePayloadT } from './model'

const useEducations = () => {
  const educations = useSelector(selectEducations)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleUpdate = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  return {
    educations,
    handleAdd,
    handleUpdate,
    handleDelete,
  }
}

export { useEducations }
