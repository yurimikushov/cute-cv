import { useEffect } from 'react'
import once from 'lodash/once'
import pick from 'lodash/pick'
import { watchSignInStateChange } from 'shared/firebase/auth'
import { useIsSignInChecking, useIsSignedIn } from './signIn'
import { useUser } from './user'
import { resetToken, setToken } from './utils'

const useAuth = () => {
  const { handleBegin, handleFinish } = useIsSignInChecking()
  const { handleSet, handleReset } = useUser()
  const { handleSignedIn, handleSignedOut } = useIsSignedIn()

  useEffect(() => {
    handleBegin()

    const finishFirstChecking = once(handleFinish)

    const unsubscribe = watchSignInStateChange((signInState) => {
      if (signInState) {
        const { user, token } = signInState
        handleSet({ user: pick(user, 'uid', 'displayName', 'email') })
        setToken(token)
        handleSignedIn()
      } else {
        handleReset()
        resetToken()
        handleSignedOut()
      }

      finishFirstChecking()
    })

    return unsubscribe
  }, [])
}

export { useAuth }
