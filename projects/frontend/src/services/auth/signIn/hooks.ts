import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInGoogle, signInFacebook, signInGitHub, signOut } from './firebase'
import { selectIsChecking, selectIsSignedIn } from './selectors'
import { beginChecking, finishChecking, signedIn, signedOut } from './slice'

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
  const isSignInChecking = useSelector(selectIsChecking)

  const dispatch = useDispatch()

  const handleBegin = useCallback(() => {
    dispatch(beginChecking())
  }, [])

  const handleFinish = useCallback(() => {
    dispatch(finishChecking())
  }, [])

  return { isSignInChecking, handleBegin, handleFinish }
}

const useIsSignedIn = () => {
  const isSignedIn = useSelector(selectIsSignedIn)

  const dispatch = useDispatch()

  const handleSignedIn = useCallback(() => {
    dispatch(signedIn())
  }, [])

  const handleSignedOut = useCallback(() => {
    dispatch(signedOut())
  }, [])

  return { isSignedIn, handleSignedIn, handleSignedOut }
}

export {
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
  useIsSignInChecking,
  useIsSignedIn,
}
