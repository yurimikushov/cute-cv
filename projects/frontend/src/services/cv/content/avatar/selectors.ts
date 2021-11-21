import { RootStateT } from 'services/store'
import { AvatarStateT } from './model'

const selectAvatar = ({ cv }: RootStateT): AvatarStateT['src'] => {
  return cv.content.avatar.src
}

export { selectAvatar }
