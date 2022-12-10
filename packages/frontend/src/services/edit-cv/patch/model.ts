import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/edit-cv'

type PatchState = {
  isPatching: boolean
  error: SerializedError | null
}

type PatchPayload = {
  publicId: string
  name?: string
  number?: number
  allowShare?: boolean
  cv?: Partial<CvContent>
}

export type { PatchState, PatchPayload }
