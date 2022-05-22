import { FC } from 'react'
import isEmpty from 'lodash/isEmpty'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import {
  useEditable,
  useCurrentCvContacts,
  CONTACTS_MAX_COUNT,
  CONTACT_TEXT_MAX_LENGTH,
  CONTACT_HREF_MAX_LENGTH,
} from 'services/edit-cv'
import Contacts from 'shared/ui/cv/page/Contacts'

const ContactsContainer: FC = () => {
  const { editable } = useEditable()
  const { contacts, changeContact, reorderContact, deleteContact, addContact } =
    useCurrentCvContacts()

  useLayoutEffectWhen(addContact, isEmpty(contacts))

  return (
    <Contacts
      editable={editable}
      contacts={contacts}
      maxCount={CONTACTS_MAX_COUNT}
      textMaxLength={CONTACT_TEXT_MAX_LENGTH}
      hrefMaxLength={CONTACT_HREF_MAX_LENGTH}
      onChange={changeContact}
      onReorder={reorderContact}
      onDelete={deleteContact}
      onAdd={addContact}
    />
  )
}

export default ContactsContainer
