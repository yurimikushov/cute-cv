import { FC } from 'react'
import SignInModal from './SignInModal'
import SignInLayoutPropsT from './SignInLayout.props'

import isNull from 'lodash/isNull'
import { useUser } from 'services/user'

const SignInLayout: FC<SignInLayoutPropsT> = ({ children }) => {
  const user = useUser()

  return (
    <>
      {children}
      {isNull(user) && <SignInModal />}
    </>
  )
}

export default SignInLayout
