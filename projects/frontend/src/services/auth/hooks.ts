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
import {
  beginChecking,
  finishChecking,
  signedIn,
  notSignedIn,
  resetUser,
  setUser,
} from './slice'
import { selectIsChecking, selectUser } from './selectors'

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(beginChecking())

    const unsubscribe = watchSignInStateChange(
      (signInState: SignInStateT | null) => {
        if (isNull(signInState)) {
          dispatch(resetUser())
          return
        }

        const { user } = signInState
        dispatch(setUser({ user: pick(user, ['uid', 'displayName', 'email']) }))

        if (isNull(user)) {
          dispatch(notSignedIn())
        } else {
          dispatch(signedIn())
        }

        dispatch(finishChecking())
      }
    )

    return () => {
      if (isNull(unsubscribe)) {
        return
      }

      unsubscribe()
    }
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

const useIsAuthChecking = () => {
  return useSelector(selectIsChecking)
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
  useIsAuthChecking,
  useUser,
}
