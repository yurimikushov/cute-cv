import { RootStateT } from 'services/store'
import { UserStateT } from './model'

const selectUser = ({ auth }: RootStateT): UserStateT['user'] => {
  return auth.user.user
}

export { selectUser }
