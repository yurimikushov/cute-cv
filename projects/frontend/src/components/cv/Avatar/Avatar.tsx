import { FC } from 'react'
import AvatarPicker from 'components/ui/AvatarPicker'
import AvatarProps from './Avatar.props'

const Avatar: FC<AvatarProps> = (props) => {
  return <AvatarPicker {...props} />
}

export default Avatar
