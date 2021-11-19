import { RootStateT } from 'services/store'
import { UserStateT } from './model'

const selectUser = (state: RootStateT): UserStateT['user'] => {
  return state.user.user
}

export { selectUser }
