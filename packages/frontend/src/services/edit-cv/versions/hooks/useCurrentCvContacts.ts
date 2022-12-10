import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateContactPayload,
  ReorderContactPayload,
  DeleteContactPayload,
} from '../model'
import { selectCurrentCvId, selectCurrentCvContacts } from '../selectors'
import {
  addContact,
  updateContact,
  reorderContact,
  deleteContact,
} from '../slice'

const useCurrentCvContacts = () => {
  const id = useSelector(selectCurrentCvId)
  const contacts = useSelector(selectCurrentCvContacts)

  const dispatch = useDispatch()

  const handleAddContact = () => {
    dispatch(addContact({ id }))
  }

  const handleChangeContact = (
    contactId: UpdateContactPayload['contactId'],
    text: UpdateContactPayload['text'],
    href: UpdateContactPayload['href']
  ) => {
    dispatch(
      updateContact({
        id,
        contactId,
        text,
        href,
      })
    )
  }

  const handleReorderContact = (
    startIndex: ReorderContactPayload['startIndex'],
    endIndex: ReorderContactPayload['endIndex']
  ) => {
    dispatch(reorderContact({ id, startIndex, endIndex }))
  }

  const handleDeleteContact = (
    contactId: DeleteContactPayload['contactId']
  ) => {
    dispatch(deleteContact({ id, contactId }))
  }

  return {
    contacts,
    addContact: handleAddContact,
    changeContact: handleChangeContact,
    reorderContact: handleReorderContact,
    deleteContact: handleDeleteContact,
  }
}

export default useCurrentCvContacts
