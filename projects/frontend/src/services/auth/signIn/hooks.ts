import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import once from 'lodash/once'
import isNull from 'lodash/isNull'
import pick from 'lodash/pick'
import { SignInChangedStateT } from './model'
import {
  watchSignInStateChange,
  signInGoogle,
  signInFacebook,
  signInGitHub,
  signOut,
} from './firebase'
import { beginChecking, finishChecking, signedIn, signedOut } from './slice'
import { selectIsChecking, selectIsSignedIn } from './selectors'
import { set as setUser, reset as resetUser } from '../user'
import { resetToken, setToken } from './utils'

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(beginChecking())

    const finishFirstChecking = once(() => {
      dispatch(finishChecking())
    })

    const unsubscribe = watchSignInStateChange(
      (signInState: SignInChangedStateT | null) => {
        if (isNull(signInState)) {
          dispatch(signedOut())
          dispatch(resetUser())
          resetToken()
        } else {
          const { user, token } = signInState
          dispatch(signedIn())
          dispatch(setUser({ user: pick(user, 'uid', 'displayName', 'email') }))
          setToken(token)
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

const useIsSignInChecking = () => {
  return useSelector(selectIsChecking)
}

const useIsSignedIn = () => {
  return useSelector(selectIsSignedIn)
}

export {
  useAuth,
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
  useIsSignInChecking,
  useIsSignedIn,
}
