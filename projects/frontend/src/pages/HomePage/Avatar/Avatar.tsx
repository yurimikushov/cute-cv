import { FC } from 'react'
import { useEditable, useCvContent } from 'services/cv'
import AvatarPicker from 'components/AvatarPicker'

const Avatar: FC = () => {
  const { editable } = useEditable()
  const {
    cv: { avatar },
    changeAvatar,
    deleteAvatar,
  } = useCvContent()

  return (
    <AvatarPicker
      editable={editable}
      src={avatar}
      onPick={changeAvatar}
      onClear={deleteAvatar}
    />
  )
}

export default Avatar
