import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from './slice'
import { selectAboutMe } from './selectors'
import { UpdatePayloadT } from './model'

const useAboutMe = () => {
  const aboutMe = useSelector(selectAboutMe)

  const dispatch = useDispatch()

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    aboutMe,
    handleChange,
  }
}

export { useAboutMe }
