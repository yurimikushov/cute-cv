import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import size from 'lodash/size'
import { selectContacts } from './selectors'
import {
  PresetPayloadT,
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
  DeletePayloadT,
} from './model'
import { preset, add, updateText, updateHref, erase } from './slice'
import { MAX_CONTACTS_SIZE } from './constants'

const useContacts = () => {
  const contacts = useSelector(selectContacts)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

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

  return {
    contacts,
    handlePreset,
    handleAdd,
    handleTextChange,
    handleHrefChange,
    handleDelete,
  }
}

export { useContacts }
