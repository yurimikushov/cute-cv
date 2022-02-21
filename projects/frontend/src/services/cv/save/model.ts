import { SerializedError } from '@reduxjs/toolkit'
import { CV } from 'services/cv'

type SaveStateT = {
  isSaving: boolean
  error: SerializedError | null
}

type SavePayload = {
  id: string
  name: string
  cv: CV
}

export type { SaveStateT, SavePayload }
