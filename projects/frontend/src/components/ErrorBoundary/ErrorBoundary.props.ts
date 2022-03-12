import { FC } from 'react'

type ErrorBoundaryProps = {
  fallback: FC<ErrorBoundaryFallbackProps>
  onError?: (error: Error) => void
  onReset?: () => void
}

type ErrorBoundaryFallbackProps = {
  error: Error
  onResetErrorBoundary: () => void
}

export default ErrorBoundaryProps
