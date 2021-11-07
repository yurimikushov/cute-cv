type LanguageT = {
  id: string
  language: string
}

type LanguagesStateT = {
  ids: Array<string>
  languagesById: Record<string, LanguageT>
}

type AddPayloadT = {
  id: string
  language: string
}

type UpdatePayloadT = {
  id: string
  language: string
}

type DeletePayloadT = {
  id: string
}

export type { LanguagesStateT, AddPayloadT, UpdatePayloadT, DeletePayloadT }
