type SavingStateT = {
  isSaved: boolean
  savedAt: Date | null
  error: Error | null
}

type FailPayloadT = {
  error: Error
}

export type { SavingStateT, FailPayloadT }
