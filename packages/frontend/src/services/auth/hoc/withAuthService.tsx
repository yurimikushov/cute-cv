import { FunctionComponent, useEffect, VFC } from 'react'
import { getDisplayName } from 'shared/react'
import { withReatom } from 'shared/reatom'

import { useAtom } from '@reatom/npm-react'
import { watchSignInStateChange } from 'shared/firebase/auth'
import once from 'shared/lib/once'
import pick from 'shared/lib/pick'
import { resetToken, setToken } from '../utils'
import { isSignInCheckingAtom, isSignedInAtom, userAtom } from '../model'

const withAuthService = <P extends object>(Component: FunctionComponent<P>) => {
  const WithAuthServiceComponent: VFC<P> = (props) => {
    const [, setIsSignInChecking] = useAtom(isSignInCheckingAtom)
    const [, setIsSignedIn] = useAtom(isSignedInAtom)
    const [, setUser] = useAtom(userAtom)

    useEffect(() => {
      setIsSignInChecking(true)

      const finishFirstChecking = once(() => setIsSignInChecking(false))

      return watchSignInStateChange((signInState) => {
        if (signInState) {
          const { user, token } = signInState
          setUser(pick(user, 'uid', 'displayName', 'email'))
          setToken(token)
          setIsSignedIn(true)
        } else {
          setUser(null)
          resetToken()
          setIsSignedIn(false)
        }

        finishFirstChecking()
      })
    }, [])

    return <Component {...props} />
  }

  WithAuthServiceComponent.displayName = `WithAuthService(${getDisplayName(
    Component
  )})`

  return WithAuthServiceComponent
}

export default <P extends object>(Component: FunctionComponent<P>) => {
  return withReatom(withAuthService(Component))
}
