import { SerializedError } from '@reduxjs/toolkit'

type DeleteState = {
  isDeleting: boolean
  error: SerializedError | null
}

type DeletePayload = {
  id: string
}

export type { DeleteState, DeletePayload }
