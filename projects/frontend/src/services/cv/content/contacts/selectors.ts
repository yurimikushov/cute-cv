import { createSelector } from 'reselect'
import map from 'lodash/map'
import { RootStateT } from 'services/store'
import { ContactsStateT } from './model'

const selectIds = ({ cv }: RootStateT): ContactsStateT['ids'] => {
  return cv.content.contacts.ids
}

const selectContactsById = ({
  cv,
}: RootStateT): ContactsStateT['contactsById'] => {
  return cv.content.contacts.contactsById
}

const selectContacts = createSelector(
  selectIds,
  selectContactsById,
  (ids, contactsById) => {
    return map(ids, (id) => contactsById[id])
  }
)

export { selectContacts }
