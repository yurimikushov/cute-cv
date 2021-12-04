import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInGoogle, signInFacebook, signInGitHub, signOut } from './firebase'
import {
  selectIsChecking,
  selectIsModalDisplayed,
  selectIsSignedIn,
  selectIsSkipped,
} from './selectors'
import {
  beginChecking,
  displayModal,
  finishChecking,
  hideModal,
  signedIn,
  signedOut,
  skip,
} from './slice'

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

const useSkipSignIn = () => {
  const isSignInSkipped = useSelector(selectIsSkipped)

  const dispatch = useDispatch()

  const handleSkipSignIn = useCallback(() => {
    dispatch(skip())
  }, [])

  return {
    isSignInSkipped,
    handleSkipSignIn,
  }
}

const useSignInModal = () => {
  const isSignInModalDisplayed = useSelector(selectIsModalDisplayed)

  const dispatch = useDispatch()

  const handleDisplaySignInModal = useCallback(() => {
    dispatch(displayModal())
  }, [])

  const handleHideSignInModal = useCallback(() => {
    dispatch(hideModal())
  }, [])

  return {
    isSignInModalDisplayed,
    handleDisplaySignInModal,
    handleHideSignInModal,
  }
}

export {
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
  useIsSignInChecking,
  useIsSignedIn,
  useSkipSignIn,
  useSignInModal,
}
