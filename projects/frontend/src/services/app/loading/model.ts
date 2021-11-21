type LoadingStateT = {
  isLoading: boolean
  error: Error | null
}

type FailPayloadT = {
  error: Error
}

export type { LoadingStateT, FailPayloadT }
