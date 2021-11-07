type ContactT = {
  id: string
  text: string
  href: string
}

type ContactsStateT = {
  ids: Array<string>
  contactsById: Record<string, ContactT>
}

type AddPayloadT = {
  id: string
  text: string
  href: string
}

type UpdatePayloadT = {
  id: string
  text: string
  href: string
}

type DeletePayloadT = {
  id: string
}

export type { ContactsStateT, AddPayloadT, UpdatePayloadT, DeletePayloadT }
