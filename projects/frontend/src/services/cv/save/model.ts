import { SerializedError } from '@reduxjs/toolkit'

type SaveStateT = {
  isSaving: boolean
  error: SerializedError | null
}

export type { SaveStateT }
