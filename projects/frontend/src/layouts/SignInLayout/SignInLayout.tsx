import { FC } from 'react'
import {
  useIsSignInChecking,
  useIsSignedIn,
  useSkipSignIn,
} from 'services/auth'
import SignInModal from './SignInModal'
import SignInLayoutPropsT from './SignInLayout.props'

const SignInLayout: FC<SignInLayoutPropsT> = ({ children }) => {
  const { isSignInChecking } = useIsSignInChecking()
  const { isSignedIn } = useIsSignedIn()
  const { isSignInSkipped, handleSkipSignIn } = useSkipSignIn()

  return (
    <>
      {children}
      {!isSignInChecking && !isSignedIn && !isSignInSkipped && (
        <SignInModal onSkip={handleSkipSignIn} />
      )}
    </>
  )
}

export default SignInLayout
