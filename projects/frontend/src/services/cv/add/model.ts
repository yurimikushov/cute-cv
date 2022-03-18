import { SerializedError } from '@reduxjs/toolkit'
import { CvContent } from 'services/cv'

type AddState = {
  isAdding: boolean
  error: SerializedError | null
}

type AddPayload = {
  name: string
  number: number
  cv: CvContent
}

export type { AddState, AddPayload }