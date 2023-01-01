import { FC } from 'react'
import { useEditable, useCurrentCvAvatar } from 'services/edit-cv'
import Avatar from 'shared/ui/cv/page/Avatar'

const AvatarContainer: FC = () => {
  const { editable } = useEditable()
  const { avatar, updateAvatar, deleteAvatar } = useCurrentCvAvatar()

  return (
    <Avatar
      editable={editable}
      src={avatar ?? null}
      onPick={updateAvatar}
      onClear={deleteAvatar}
    />
  )
}

export default AvatarContainer
