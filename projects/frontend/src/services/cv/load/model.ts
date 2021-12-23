import { SerializedError } from '@reduxjs/toolkit'

type LoadingStateT = {
  isLoading: boolean
  error: SerializedError | null
}

export type { LoadingStateT }
