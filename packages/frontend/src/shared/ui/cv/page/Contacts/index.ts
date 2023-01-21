import InternalContacts from './Contacts'
import Contact from './Contact'
import AddButton from './AddButton'

type InternalContactsProps = typeof InternalContacts

type ContactsInterface = InternalContactsProps & {
  Contact: typeof Contact
  AddButton: typeof AddButton
}

const Contacts = InternalContacts as ContactsInterface

Contacts.Contact = Contact
Contacts.AddButton = AddButton

export default Contacts
