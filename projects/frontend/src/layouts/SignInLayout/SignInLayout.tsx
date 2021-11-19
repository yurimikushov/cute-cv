import { FC } from 'react'
import SignInModal from './SignInModal'
import SignInLayoutPropsT from './SignInLayout.props'

const SignInLayout: FC<SignInLayoutPropsT> = ({ children }) => (
  <>
    {children}
    <SignInModal />
  </>
)

export default SignInLayout
