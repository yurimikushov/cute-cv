import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, update, erase } from './slice'
import { selectContacts } from './selectors'

const useContacts = () => {
  const contacts = useSelector(selectContacts)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleUpdate = useCallback((id: string, text: string, href: string) => {
    dispatch(update(id, text, href))
  }, [])

  const handleDelete = useCallback((id: string) => {
    dispatch(erase(id))
  }, [])

  return {
    contacts,
    handleAdd,
    handleUpdate,
    handleDelete,
  }
}

export { useContacts }
