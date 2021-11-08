import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  add,
  updateDegree,
  updateUniversity,
  updateDuration,
  erase,
} from './slice'
import { selectEducations } from './selectors'
import {
  DeletePayloadT,
  UpdateDegreePayloadT,
  UpdateUniversityPayloadT,
  UpdateDurationPayloadT,
} from './model'

const useEducations = () => {
  const educations = useSelector(selectEducations)

  const dispatch = useDispatch()

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
    handleAdd,
    handleDegreeChange,
    handleUniversityChange,
    handleDurationChange,
    handleDelete,
  }
}

export { useEducations }
