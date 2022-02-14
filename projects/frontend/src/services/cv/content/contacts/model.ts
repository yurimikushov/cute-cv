type ContactT = {
  id: string
  text: string
  href: string
}

type ContactsStateT = {
  ids: Array<string>
  contactsById: Record<string, ContactT>
}

type UpdateTextPayloadT = {
  id: string
  text: string
}

type UpdateHrefPayloadT = {
  id: string
  href: string
}

type DeletePayloadT = {
  id: string
}

type ReorderPayloadT = {
  startIndex: number
  endIndex: number
}

export type {
  ContactsStateT,
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
  DeletePayloadT,
  ReorderPayloadT,
}
