import { SerializedError } from '@reduxjs/toolkit'
import { Content } from 'services/edit-cv/stores/cv/model'

type UpdateState = {
  isUpdating: boolean
  error: SerializedError | null
}

type UpdatePayload = {
  publicId: string
  name: string
  number: number
  allowShare: boolean
  cv: Content
}

export type { UpdateState, UpdatePayload }
