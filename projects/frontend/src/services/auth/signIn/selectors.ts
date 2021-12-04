import { RootStateT } from 'services/store'
import { SignInStateT } from './model'

const selectIsChecking = ({ auth }: RootStateT): SignInStateT['isChecking'] => {
  return auth.signIn.isChecking
}

const selectIsSignedIn = ({ auth }: RootStateT): SignInStateT['isSignedIn'] => {
  return auth.signIn.isSignedIn
}

const selectIsSkipped = ({ auth }: RootStateT): SignInStateT['isSkipped'] => {
  return auth.signIn.isSkipped
}

const selectIsModalDisplayed = ({
  auth,
}: RootStateT): SignInStateT['isModalDisplayed'] => {
  return auth.signIn.isModalDisplayed
}

export {
  selectIsChecking,
  selectIsSignedIn,
  selectIsSkipped,
  selectIsModalDisplayed,
}
