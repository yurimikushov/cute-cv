import { RootState } from 'services/store'
import { UserState } from './model'

const selectUser = ({ auth }: RootState): UserState['user'] => {
  return auth.user.user
}

export { selectUser }
