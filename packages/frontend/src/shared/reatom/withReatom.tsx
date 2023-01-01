import { FunctionComponent, VFC } from 'react'
import { getDisplayName } from 'shared/react'
import ReatomProvider from './ReatomProvider'

const withReatom = <P extends object>(Component: FunctionComponent<P>) => {
  const WithReatomComponent: VFC<P> = (props) => {
    return (
      <ReatomProvider>
        <Component {...props} />
      </ReatomProvider>
    )
  }

  WithReatomComponent.displayName = `WithReatom(${getDisplayName(Component)})`

  return WithReatomComponent
}

export default withReatom
