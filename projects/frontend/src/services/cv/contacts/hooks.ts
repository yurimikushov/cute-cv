import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update, erase } from './slice'
import { selectContacts } from './selectors'
import { DeletePayloadT, UpdatePayloadT } from './model'

const useContacts = () => {
  const contacts = useSelector(selectContacts)

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
    contacts,
    handleAdd,
    handleUpdate,
    handleDelete,
  }
}

export { useContacts }
