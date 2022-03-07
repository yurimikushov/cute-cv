import { SerializedError } from '@reduxjs/toolkit'
import { CV } from 'services/cv'

type SaveState = {
  isSaving: boolean
  error: SerializedError | null
}

type SavePayload = {
  id: string
  name: string
  number: number
  cv: CV
}

export type { SaveState, SavePayload }
