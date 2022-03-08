import { RootState } from 'services/store'
import { SignInState } from './model'

const selectIsChecking = ({ auth }: RootState): SignInState['isChecking'] => {
  return auth.signIn.isChecking
}

const selectIsSignedIn = ({ auth }: RootState): SignInState['isSignedIn'] => {
  return auth.signIn.isSignedIn
}

const selectIsSkipped = ({ auth }: RootState): SignInState['isSkipped'] => {
  return auth.signIn.isSkipped
}

export { selectIsChecking, selectIsSignedIn, selectIsSkipped }
