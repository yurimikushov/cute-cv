import { useDispatch, useSelector } from 'react-redux'
import { UpdateAvatarPayload } from '../model'
import { selectCurrentCvId, selectCurrentCvAvatar } from '../selectors'
import { updateAvatar, deleteAvatar } from '../slice'

const useCurrentCvAvatar = () => {
  const id = useSelector(selectCurrentCvId)
  const avatar = useSelector(selectCurrentCvAvatar)

  const dispatch = useDispatch()

  const handleChangeAvatar = (src: UpdateAvatarPayload['src']) => {
    dispatch(updateAvatar({ id, src }))
  }

  const handleDeleteAvatar = () => {
    dispatch(deleteAvatar({ id }))
  }

  return {
    avatar,
    changeAvatar: handleChangeAvatar,
    deleteAvatar: handleDeleteAvatar,
  }
}

export default useCurrentCvAvatar
