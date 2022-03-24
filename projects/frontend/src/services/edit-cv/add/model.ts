import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/edit-cv'

type AddState = {
  isAdding: boolean
  error: SerializedError | null
}

type AddPayload = {
  name: string
  number: number
  cv: CvContent
  allowShare: boolean
}

export type { AddState, AddPayload }
