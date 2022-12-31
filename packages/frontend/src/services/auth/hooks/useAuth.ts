import { useAtom } from '@reatom/npm-react'
import {
  signInGoogle,
  signInGitHub,
  signInFacebook,
  signOut,
} from 'shared/firebase/auth'
import { isSignedInAtom, isSignInCheckingAtom, isSkippedAtom } from '../model'

const useAuth = () => {
  const [isSignInChecking] = useAtom(isSignInCheckingAtom)
  const [isSignedIn] = useAtom(isSignedInAtom)
  const [isSkipped, setSkip] = useAtom(isSkippedAtom)

  const onSignIn = (provider: 'google' | 'github' | 'facebook') => {
    switch (provider) {
      case 'google': {
        return signInGoogle()
      }
      case 'github': {
        return signInGitHub()
      }
      case 'facebook': {
        return signInFacebook()
      }
      default:
        throw new Error(`[AuthService] Provider ${provider} is not implemented`)
    }
  }

  const onSignOut = signOut

  const onSkip = () => {
    setSkip(true)
  }

  return {
    isSignInChecking,
    isSignedIn,
    isSkipped,
    onSignIn,
    onSignOut,
    onSkip,
  }
}

export default useAuth
