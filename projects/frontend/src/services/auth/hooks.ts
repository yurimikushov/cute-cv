import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isNull from 'lodash/isNull'
import pick from 'lodash/pick'
import { SignInStateT } from './model'
import {
  watchSignInStateChange,
  signInGoogle,
  signInFacebook,
  signInGitHub,
  signOut,
} from './firebase'
import { resetUser, setUser } from './slice'
import { selectUser } from './selectors'

const useAuth = () => {
  const [signInState, setAuthState] = useState<SignInStateT | null>(null)

  useEffect(() => {
    const unsubscribe = watchSignInStateChange(setAuthState)

    return () => {
      if (isNull(unsubscribe)) {
        return
      }

      unsubscribe()
    }
  }, [])

  const dispatch = useDispatch()

  useEffect(() => {
    if (isNull(signInState)) {
      dispatch(resetUser())
      return
    }

    const { user } = signInState
    dispatch(setUser({ user: pick(user, ['uid', 'displayName', 'email']) }))
  }, [signInState])
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

const useUser = () => {
  return useSelector(selectUser)
}

export {
  useAuth,
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
  useUser,
}
