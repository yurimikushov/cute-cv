import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import size from 'lodash/size'
import { selectContacts } from './selectors'
import {
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
  DeletePayloadT,
  ReorderPayloadT,
} from './model'
import { add, updateText, updateHref, erase, reorder } from './slice'
import { MAX_CONTACTS_SIZE } from './constants'

const useContacts = () => {
  const contacts = useSelector(selectContacts)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    if (MAX_CONTACTS_SIZE <= size(contacts)) {
      return
    }

    dispatch(add())
  }, [size(contacts)])

  const handleTextChange = useCallback((payload: UpdateTextPayloadT) => {
    dispatch(updateText(payload))
  }, [])

  const handleHrefChange = useCallback((payload: UpdateHrefPayloadT) => {
    dispatch(updateHref(payload))
  }, [])

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  const handleReorder = useCallback((payload: ReorderPayloadT) => {
    dispatch(reorder(payload))
  }, [])

  return {
    contacts,
    handleAdd,
    handleTextChange,
    handleHrefChange,
    handleDelete,
    handleReorder,
  }
}

export { useContacts }
