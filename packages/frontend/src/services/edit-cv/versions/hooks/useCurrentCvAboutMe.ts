import { useDispatch, useSelector } from 'react-redux'
import { UpdateAboutMePayload } from '../model'
import { selectCurrentCvId, selectCurrentCvAboutMe } from '../selectors'
import { updateAboutMe } from '../slice'

const useCurrentCvAboutMe = () => {
  const id = useSelector(selectCurrentCvId)
  const aboutMe = useSelector(selectCurrentCvAboutMe)

  const dispatch = useDispatch()

  const handleChangeAboutMe = (aboutMe: UpdateAboutMePayload['aboutMe']) => {
    dispatch(updateAboutMe({ id, aboutMe }))
  }

  return {
    aboutMe,
    changeAboutMe: handleChangeAboutMe,
  }
}

export default useCurrentCvAboutMe
