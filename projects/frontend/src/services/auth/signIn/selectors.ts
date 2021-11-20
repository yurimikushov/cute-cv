import { RootStateT } from 'services/store'
import { SignInStateT } from './model'

const selectIsChecking = ({ auth }: RootStateT): SignInStateT['isChecking'] => {
  return auth.signIn.isChecking
}

export { selectIsChecking }
