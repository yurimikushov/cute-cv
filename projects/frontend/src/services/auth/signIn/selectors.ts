import { RootStateT } from 'services/store'
import { SignInStateT } from './model'

const selectIsChecking = ({ auth }: RootStateT): SignInStateT['isChecking'] => {
  return auth.signIn.isChecking
}

const selectIsSignedIn = ({ auth }: RootStateT): SignInStateT['isSignedIn'] => {
  return auth.signIn.isSignedIn
}

export { selectIsChecking, selectIsSignedIn }
