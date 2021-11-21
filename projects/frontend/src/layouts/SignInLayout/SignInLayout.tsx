import { FC } from 'react'
import { useIsSignInChecking, useIsSignedIn } from 'services/auth'
import SignInModal from './SignInModal'
import SignInLayoutPropsT from './SignInLayout.props'

const SignInLayout: FC<SignInLayoutPropsT> = ({ children }) => {
  const { isSignInChecking } = useIsSignInChecking()
  const { isSignedIn } = useIsSignedIn()

  return (
    <>
      {children}
      {!isSignInChecking && !isSignedIn && <SignInModal />}
    </>
  )
}

export default SignInLayout
