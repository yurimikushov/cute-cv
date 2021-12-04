import { FC } from 'react'
import {
  useIsSignInChecking,
  useIsSignedIn,
  useSkipSignIn,
  useSignInModal,
} from 'services/auth'
import SignInModal from './SignInModal'
import SignInLayoutPropsT from './SignInLayout.props'

const SignInLayout: FC<SignInLayoutPropsT> = ({ children }) => {
  const { isSignInChecking } = useIsSignInChecking()
  const { isSignedIn } = useIsSignedIn()
  const { isSignInModalDisplayed, handleHideSignInModal } = useSignInModal()
  const { handleSkipSignIn } = useSkipSignIn()

  const handleSkip = () => {
    handleSkipSignIn()
    handleHideSignInModal()
  }

  return (
    <>
      {children}
      {!isSignInChecking && !isSignedIn && isSignInModalDisplayed && (
        <SignInModal onSkip={handleSkip} />
      )}
    </>
  )
}

export default SignInLayout
