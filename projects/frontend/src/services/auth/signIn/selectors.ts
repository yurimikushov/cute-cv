import { RootState } from 'services/store'
import { SignInStateT } from './model'

const selectIsChecking = ({ auth }: RootState): SignInStateT['isChecking'] => {
  return auth.signIn.isChecking
}

const selectIsSignedIn = ({ auth }: RootState): SignInStateT['isSignedIn'] => {
  return auth.signIn.isSignedIn
}

const selectIsSkipped = ({ auth }: RootState): SignInStateT['isSkipped'] => {
  return auth.signIn.isSkipped
}

const selectIsModalDisplayed = ({
  auth,
}: RootState): SignInStateT['isModalDisplayed'] => {
  return auth.signIn.isModalDisplayed
}

export {
  selectIsChecking,
  selectIsSignedIn,
  selectIsSkipped,
  selectIsModalDisplayed,
}
