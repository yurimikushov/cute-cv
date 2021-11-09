import { FC } from 'react'
import { useAvatar } from 'services/cv'
import AvatarPicker from 'components/AvatarPicker'

const Avatar: FC = () => {
  const { src, handleChange, handleDelete } = useAvatar()

  return (
    <AvatarPicker
      src={src ?? ''}
      onPick={(src) => handleChange({ src })}
      onClear={handleDelete}
    />
  )
}

export default Avatar
