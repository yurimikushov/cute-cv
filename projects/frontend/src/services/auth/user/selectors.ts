import { RootState } from 'services/store'
import { UserStateT } from './model'

const selectUser = ({ auth }: RootState): UserStateT['user'] => {
  return auth.user.user
}

export { selectUser }
