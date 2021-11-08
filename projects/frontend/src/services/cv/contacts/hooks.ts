import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, updateText, updateHref, erase } from './slice'
import { selectContacts } from './selectors'
import { DeletePayloadT, UpdateTextPayloadT, UpdateHrefPayloadT } from './model'

const useContacts = () => {
  const contacts = useSelector(selectContacts)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleTextChange = useCallback((payload: UpdateTextPayloadT) => {
    dispatch(updateText(payload))
  }, [])

  const handleHrefChange = useCallback((payload: UpdateHrefPayloadT) => {
    dispatch(updateHref(payload))
  }, [])

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  return {
    contacts,
    handleAdd,
    handleTextChange,
    handleHrefChange,
    handleDelete,
  }
}

export { useContacts }
