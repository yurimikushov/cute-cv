import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAboutMe } from './selectors'
import { PresetPayloadT, UpdatePayloadT } from './model'
import { preset, update } from './slice'

const useAboutMe = () => {
  const aboutMe = useSelector(selectAboutMe)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    aboutMe,
    handlePreset,
    handleChange,
  }
}

export { useAboutMe }
