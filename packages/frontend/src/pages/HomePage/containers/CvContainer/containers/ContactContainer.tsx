import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvContact,
  CONTACT_TEXT_MAX_LENGTH,
  CONTACT_HREF_MAX_LENGTH,
} from 'services/edit-cv'
import Contacts from 'shared/ui/cv/page/Contacts'

const ContactContainer: VFC<{ id: string }> = ({ id }) => {
  const { editable } = useEditable()
  const { contact, updateContact, deleteContact } = useCurrentCvContact(id)

  const { href, text } = contact ?? {
    href: '',
    text: '',
  }

  return (
    <Contacts.Contact
      editable={editable}
      href={href}
      text={text}
      hrefMaxLength={CONTACT_TEXT_MAX_LENGTH}
      textMaxLength={CONTACT_HREF_MAX_LENGTH}
      onHrefChange={(href) => updateContact({ href, text })}
      onTextChange={(text) => updateContact({ href, text })}
      onDelete={deleteContact}
    />
  )
}

export default ContactContainer
