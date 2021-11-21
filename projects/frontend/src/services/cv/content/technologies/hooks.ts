import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTechnologies } from './selectors'
import { PresetPayloadT, UpdatePayloadT } from './model'
import { preset, update } from './slice'

const useTechnologies = () => {
  const technologies = useSelector(selectTechnologies)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    technologies,
    handlePreset,
    handleChange,
  }
}

export { useTechnologies }
