import { FC, ReactElement } from 'react'
import useEventListener from 'shared/hooks/useEventListener'
import GlobalErrorBoundaryProps from './GlobalErrorBoundary.props'

const GlobalErrorBoundary: FC<GlobalErrorBoundaryProps> = ({
  children,
  onError,
}) => {
  useEventListener('error', (e) => {
    onError(e.error)
  })

  useEventListener('unhandledrejection', (e) => {
    onError(e.reason)
  })

  return (children ?? null) as ReactElement | null
}

export default GlobalErrorBoundary
