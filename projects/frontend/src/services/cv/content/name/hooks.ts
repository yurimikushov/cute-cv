import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFullName } from './selectors'
import { PresetPayloadT, UpdatePayloadT } from './model'
import { preset, update } from './slice'

const useFullName = () => {
  const fullName = useSelector(selectFullName)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    fullName,
    handlePreset,
    handleChange,
  }
}

export { useFullName }
