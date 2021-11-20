import { RootStateT } from 'services/store'
import { AuthStateT } from './model'

const selectIsChecking = ({ auth }: RootStateT): AuthStateT['isChecking'] => {
  return auth.isChecking
}

const selectUser = ({ auth }: RootStateT): AuthStateT['user'] => {
  return auth.user
}

export { selectIsChecking, selectUser }
