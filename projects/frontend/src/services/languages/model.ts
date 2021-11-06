type LanguageT = {
  id: string
  language: string
}

type LanguagesStateT = {
  ids: Array<string>
  languagesById: Record<string, LanguageT>
}

export type { LanguagesStateT }
