import { FC } from 'react'
import {
  useIsSignInChecking,
  useIsSignedIn,
  useSkipSignIn,
  useSignInModal,
} from 'services/auth'
import SignInModal from './SignInModal'

const SignIn: FC = () => {
  const { isSignInChecking } = useIsSignInChecking()
  const { isSignedIn } = useIsSignedIn()
  const { isSignInModalDisplayed, handleHideSignInModal } = useSignInModal()
  const { handleSkipSignIn } = useSkipSignIn()

  const handleSkip = () => {
    handleSkipSignIn()
    handleHideSignInModal()
  }

  if (isSignInChecking || isSignedIn || !isSignInModalDisplayed) {
    return null
  }

  return <SignInModal onSkip={handleSkip} />
}

export default SignIn
