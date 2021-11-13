type LanguageT = {
  id: string
  language: string
}

type LanguagesStateT = {
  ids: Array<string>
  languagesById: Record<string, LanguageT>
}

type PresetPayloadT = {
  languages: Array<LanguageT>
}

type UpdatePayloadT = {
  id: string
  language: string
}

type DeletePayloadT = {
  id: string
}

export type { LanguagesStateT, PresetPayloadT, UpdatePayloadT, DeletePayloadT }
