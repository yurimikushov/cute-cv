import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLanguages } from './selectors'
import { PresetPayloadT, DeletePayloadT, UpdatePayloadT } from './model'
import { preset, add, update, erase } from './slice'

const useLanguages = () => {
  const languages = useSelector(selectLanguages)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleChange = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  return {
    languages,
    handlePreset,
    handleAdd,
    handleChange,
    handleDelete,
  }
}

export { useLanguages }
