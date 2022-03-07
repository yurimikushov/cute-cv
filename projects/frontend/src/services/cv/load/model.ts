import { SerializedError } from '@reduxjs/toolkit'

type LoadingState = {
  isLoadingAll: boolean
  errorAll: SerializedError | null
  isLoading: boolean
  error: SerializedError | null
}

export type { LoadingState }
