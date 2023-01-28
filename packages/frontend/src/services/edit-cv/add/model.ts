import { SerializedError } from '@reduxjs/toolkit'
import { Content } from 'services/edit-cv/stores/cv/model'

type AddState = {
  isAdding: boolean
  error: SerializedError | null
}

type AddPayload = {
  name: string
  number: number
  cv: Content
  allowShare: boolean
}

export type { AddState, AddPayload }
