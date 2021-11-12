import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPosition } from './selectors'
import { PresetPayloadT, UpdatePayloadT } from './model'
import { preset, update } from './slice'

const usePosition = () => {
  const position = useSelector(selectPosition)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    position,
    handlePreset,
    handleChange,
  }
}

export { usePosition }
