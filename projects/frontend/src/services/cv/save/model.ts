import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/cv'

type SaveState = {
  isSaving: boolean
  error: SerializedError | null
}

type SavePayload = {
  id: string
  name: string
  number: number
  cv: CvContent
}

export type { SaveState, SavePayload }
