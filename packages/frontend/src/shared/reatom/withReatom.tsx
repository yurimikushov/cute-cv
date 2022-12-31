import { FunctionComponent, VFC } from 'react'
import { reatomContext } from '@reatom/npm-react'
import { getDisplayName } from 'shared/react'
import ctx from './ctx'

const withReatom = <P extends object>(Component: FunctionComponent<P>) => {
  const WithReatomComponent: VFC<P> = (props) => {
    return (
      <reatomContext.Provider value={ctx}>
        <Component {...props} />
      </reatomContext.Provider>
    )
  }

  WithReatomComponent.displayName = `WithReatom(${getDisplayName(Component)})`

  return WithReatomComponent
}

export default withReatom
