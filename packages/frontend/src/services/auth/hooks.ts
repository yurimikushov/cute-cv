import { useAtom } from '@reatom/npm-react'
import { signIn, signOut } from 'shared/firebase/auth'
import { isSignedInAtom, isSignInCheckingAtom, isSkippedAtom } from './model'

const useAuth = () => {
  const [isSignInChecking] = useAtom(isSignInCheckingAtom)
  const [isSignedIn] = useAtom(isSignedInAtom)
  const [isSignInSkipped, setIsSignInSkipped] = useAtom(isSkippedAtom)

  const skipSignIn = () => {
    setIsSignInSkipped(true)
  }

  return {
    isSignInChecking,
    isSignedIn,
    isSignInSkipped,
    signIn,
    signOut,
    skipSignIn,
  }
}

export { useAuth }
