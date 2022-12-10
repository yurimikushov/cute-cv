import { FC, ReactElement, useEffect } from 'react'
import GlobalErrorBoundaryProps from './GlobalErrorBoundary.props'

const GlobalErrorBoundary: FC<GlobalErrorBoundaryProps> = ({
  children,
  onError,
}) => {
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      onError(e.error)
    }

    const handlePromisesRejection = (e: PromiseRejectionEvent) => {
      onError(e.reason)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handlePromisesRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handlePromisesRejection)
    }
  }, [onError])

  return (children ?? null) as ReactElement | null
}

export default GlobalErrorBoundary
