import { useCallback, useEffect, useState } from 'react'
import isNull from 'lodash/isNull'
import { SignInState } from './model'
import {
  watchSignInStateChange,
  signInGoogle,
  signInFacebook,
  signInGitHub,
  signOut,
} from './firebase'

const useSignInState = () => {
  const [signInState, setAuthState] = useState<SignInState | null>(null)

  useEffect(() => {
    const unsubscribe = watchSignInStateChange(setAuthState)

    return () => {
      if (isNull(unsubscribe)) {
        return
      }

      unsubscribe()
    }
  }, [])

  return signInState
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

const useSignInFacebook = () => {
  const [isSignIn, setIsSignIn] = useState(false)

  const handleSignInFacebook = useCallback(async () => {
    setIsSignIn(true)
    await signInFacebook()
    setIsSignIn(false)
  }, [])

  return {
    isSignIn,
    handleSignInFacebook,
  }
}

const useSignInGitHub = () => {
  const [isSignIn, setIsSignIn] = useState(false)

  const handleSignInGitHub = useCallback(async () => {
    setIsSignIn(true)
    await signInGitHub()
    setIsSignIn(false)
  }, [])

  return {
    isSignIn,
    handleSignInGitHub,
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

export {
  useSignInState,
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
}
