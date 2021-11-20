import { RootStateT } from 'services/store'
import { AuthStateT } from './model'

const selectUser = ({ auth }: RootStateT): AuthStateT['user'] => {
  return auth.user
}

export { selectUser }
