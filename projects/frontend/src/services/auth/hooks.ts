import { useCallback, useEffect, useState } from 'react'
import isNull from 'lodash/isNull'
import { AuthStateT } from './model'
import { signInGoogle, watchAuthStateChange, signOut } from './firebase'

const useAuthState = () => {
  const [authState, setAuthState] = useState<AuthStateT | null>(null)

  useEffect(() => {
    const unsubscribe = watchAuthStateChange((authState) => {
      if (isNull(authState)) {
        return
      }

      setAuthState(authState)
    })

    return () => {
      if (isNull(unsubscribe)) {
        return
      }

      unsubscribe()
    }
  }, [])

  return authState
}

const useSignInGoogle = () => {
  const [isSignIn, setIsSignIn] = useState(false)

  const handleSignInGoogle = useCallback(async () => {
    setIsSignIn(true)
    await signInGoogle()
    setIsSignIn(false)
  }, [])

  return {
    isSignIn,
    handleSignInGoogle,
  }
}

const useSignOut = () => {
  const [isSignOut, setIsSignOut] = useState(false)

  const handleSignOut = useCallback(async () => {
    setIsSignOut(true)
    await signOut()
    setIsSignOut(false)
  }, [])

  return {
    isSignOut,
    handleSignOut,
  }
}

export { useAuthState, useSignInGoogle, useSignOut }
