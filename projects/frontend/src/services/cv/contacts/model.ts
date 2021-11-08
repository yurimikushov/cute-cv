type ContactT = {
  id: string
  text: string
  href: string
}

type ContactsStateT = {
  ids: Array<string>
  contactsById: Record<string, ContactT>
}

type UpdatePayloadT = {
  id: string
  text: string
  href: string
}

type DeletePayloadT = {
  id: string
}

export type { ContactsStateT, UpdatePayloadT, DeletePayloadT }
