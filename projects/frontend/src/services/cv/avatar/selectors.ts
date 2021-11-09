import { RootStateT } from 'services/store'
import { AvatarStateT } from './model'

const selectAvatar = ({ cv }: RootStateT): AvatarStateT['src'] => {
  return cv.avatar.src
}

export { selectAvatar }
