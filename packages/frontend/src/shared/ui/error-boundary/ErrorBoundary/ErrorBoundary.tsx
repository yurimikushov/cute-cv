import { PureComponent } from 'react'
import ErrorBoundaryProps from './ErrorBoundary.props'
import ErrorBoundaryState from './ErrorBoundary.state'

const initialState: ErrorBoundaryState = {
  error: null,
}

class ErrorBoundary extends PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error) {
    return {
      error,
    }
  }

  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = initialState
  }

  componentDidCatch(error: Error) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.onError?.(error)
  }

  private handleReset = () => {
    this.setState(initialState)

    // eslint-disable-next-line react/destructuring-assignment
    this.props.onReset?.()
  }

  render() {
    const { error } = this.state
    const { fallback: FallbackComponent, children } = this.props

    if (error) {
      return (
        <FallbackComponent
          error={error}
          onResetErrorBoundary={this.handleReset}
        />
      )
    }

    return children
  }
}

export default ErrorBoundary
