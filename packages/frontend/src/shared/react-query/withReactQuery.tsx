import { FunctionComponent, VFC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from 'shared/react-query'
import { getDisplayName } from 'shared/react'

const queryClient = new QueryClient()

const withReactQuery = <P extends object>(Component: FunctionComponent<P>) => {
  const WithReactQueryComponent: VFC<P> = (props) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...props} />
      </QueryClientProvider>
    )
  }

  WithReactQueryComponent.displayName = `WithReactQuery(${getDisplayName(
    Component
  )})`

  return WithReactQueryComponent
}

export default withReactQuery
