import { FC, ReactElement } from 'react'
import useWindowEventListener from 'shared/hooks/useWindowEventListener'
import GlobalErrorBoundaryProps from './GlobalErrorBoundary.props'

const GlobalErrorBoundary: FC<GlobalErrorBoundaryProps> = ({
  children,
  onError,
}) => {
  useWindowEventListener('error', (e) => {
    onError(e.error)
  })

  useWindowEventListener('unhandledrejection', (e) => {
    onError(e.reason)
  })

  return (children ?? null) as ReactElement | null
}

export default GlobalErrorBoundary
