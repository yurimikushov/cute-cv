import { FC } from 'react'
import { useEditable } from 'services/app'
import { useAvatar } from 'services/cv'
import AvatarPicker from 'components/AvatarPicker'

const Avatar: FC = () => {
  const { editable } = useEditable()
  const { src, handleChange, handleDelete } = useAvatar()

  return (
    <AvatarPicker
      editable={editable}
      src={src ?? ''}
      onPick={(src) => handleChange({ src })}
      onClear={handleDelete}
    />
  )
}

export default Avatar
