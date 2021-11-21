type ContactT = {
  id: string
  text: string
  href: string
}

type ContactsStateT = {
  ids: Array<string>
  contactsById: Record<string, ContactT>
}

type PresetPayloadT = {
  contacts: Array<ContactT>
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

export type {
  ContactsStateT,
  PresetPayloadT,
  UpdateTextPayloadT,
  UpdateHrefPayloadT,
  DeletePayloadT,
}