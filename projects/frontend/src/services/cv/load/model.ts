import { SerializedError } from '@reduxjs/toolkit'

type LoadingStateT = {
  isLoadingAll: boolean
  errorAll: SerializedError | null
  isLoading: boolean
  error: SerializedError | null
}

export type { LoadingStateT }
