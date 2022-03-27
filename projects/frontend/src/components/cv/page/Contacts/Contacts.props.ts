import { Contact } from 'services/edit-cv'

type ContactsProps = {
  className?: string
  editable: boolean
  contacts: Array<Contact>
  maxCount: number
  textMaxLength: number
  hrefMaxLength: number
  onChange: (id: string, text: string, href: string) => void
  onReorder: (startIndex: number, endIndex: number) => void
  onDelete: (id: string) => void
  onAdd: () => void
}

export default ContactsProps
