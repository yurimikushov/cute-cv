import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAvatar } from './selectors'
import { PresetPayloadT, UpdatePayloadT } from './model'
import { preset, update, erase } from './slice'

const useAvatar = () => {
  const src = useSelector(selectAvatar)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  const handleDelete = useCallback(() => {
    dispatch(erase())
  }, [])

  return {
    src,
    handlePreset,
    handleChange,
    handleDelete,
  }
}

export { useAvatar }
