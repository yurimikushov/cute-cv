import { useEffect } from 'react'
import isNull from 'lodash/isNull'
import once from 'lodash/once'
import pick from 'lodash/pick'
import {
  useIsSignInChecking,
  useIsSignedIn,
  watchSignInStateChange,
  SignInChangedState,
} from './signIn'
import { useUser } from './user'
import { resetToken, setToken } from './utils'

const useAuth = () => {
  const { handleBegin, handleFinish } = useIsSignInChecking()
  const { handleSet, handleReset } = useUser()
  const { handleSignedIn, handleSignedOut } = useIsSignedIn()

  useEffect(() => {
    handleBegin()

    const finishFirstChecking = once(handleFinish)

    const unsubscribe = watchSignInStateChange(
      (signInState: SignInChangedState | null) => {
        if (isNull(signInState)) {
          handleReset()
          resetToken()
          handleSignedOut()
        } else {
          const { user, token } = signInState
          handleSet({ user: pick(user, 'uid', 'displayName', 'email') })
          setToken(token)
          handleSignedIn()
        }

        finishFirstChecking()
      }
    )

    if (isNull(unsubscribe)) {
      return
    }

    return unsubscribe
  }, [])
}

export { useAuth }
