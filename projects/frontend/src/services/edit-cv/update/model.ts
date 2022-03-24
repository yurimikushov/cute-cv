import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/edit-cv'

type UpdateState = {
  isUpdating: boolean
  error: SerializedError | null
}

type UpdatePayload = {
  publicId: string
  name: string
  number: number
  allowShare: boolean
  cv: CvContent
}

export type { UpdateState, UpdatePayload }
