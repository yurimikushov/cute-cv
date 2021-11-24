type SaveStateT = {
  isSaving: boolean
  error: Error | null
}

type FailPayloadT = {
  error: Error
}

export type { SaveStateT, FailPayloadT }
