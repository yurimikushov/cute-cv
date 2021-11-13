import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEducations } from './selectors'
import {
  PresetPayloadT,
  DeletePayloadT,
  UpdateDegreePayloadT,
  UpdateUniversityPayloadT,
  UpdateDurationPayloadT,
} from './model'
import {
  preset,
  add,
  updateDegree,
  updateUniversity,
  updateDuration,
  erase,
} from './slice'

const useEducations = () => {
  const educations = useSelector(selectEducations)

  const dispatch = useDispatch()

  const handlePreset = useCallback((payload: PresetPayloadT) => {
    dispatch(preset(payload))
  }, [])

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handleDegreeChange = useCallback((payload: UpdateDegreePayloadT) => {
    dispatch(updateDegree(payload))
  }, [])

  const handleUniversityChange = useCallback(
    (payload: UpdateUniversityPayloadT) => {
      dispatch(updateUniversity(payload))
    },
    []
  )

  const handleDurationChange = useCallback(
    (payload: UpdateDurationPayloadT) => {
      dispatch(updateDuration(payload))
    },
    []
  )

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  return {
    educations,
    handlePreset,
    handleAdd,
    handleDegreeChange,
    handleUniversityChange,
    handleDurationChange,
    handleDelete,
  }
}

export { useEducations }
