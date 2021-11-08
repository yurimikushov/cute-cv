import AvatarPicker from 'components/AvatarPicker'
import { FC, useState } from 'react'

const Avatar: FC = () => {
  const [avatar, setAvatar] = useState('')

  return <AvatarPicker src={avatar} onPick={(src) => setAvatar(src ?? '')} />
}

export default Avatar
