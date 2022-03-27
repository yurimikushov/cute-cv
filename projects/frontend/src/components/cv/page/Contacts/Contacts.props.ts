import { Contact } from 'services/edit-cv'

type ContactsProps = {
  className?: string
  contacts: Array<Contact>
  maxCount?: number
  textMaxLength?: number
  hrefMaxLength?: number
} & (
  | {
      editable: boolean
      onChange: (id: string, text: string, href: string) => void
      onReorder: (startIndex: number, endIndex: number) => void
      onDelete: (id: string) => void
      onAdd: () => void
    }
  | {
      editable: false
      onChange?: never
      onReorder?: never
      onDelete?: never
      onAdd?: never
    }
)

export default ContactsProps
