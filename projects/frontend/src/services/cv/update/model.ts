import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/cv'

type UpdateState = {
  isUpdating: boolean
  error: SerializedError | null
}

type UpdatePayload = {
  publicId: string
  name: string
  number: number
  cv: CvContent
}

export type { UpdateState, UpdatePayload }