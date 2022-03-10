import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/cv'

type PatchState = {
  isPatching: boolean
  error: SerializedError | null
}

type PatchPayload = {
  id: string
  name?: string
  number?: number
  cv?: Partial<CvContent>
}

export type { PatchState, PatchPayload }
