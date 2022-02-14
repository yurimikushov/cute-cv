import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import size from 'lodash/size'
import { selectEducations } from './selectors'
import {
  DeletePayloadT,
  UpdateDegreePayloadT,
  UpdateUniversityPayloadT,
  UpdateDurationPayloadT,
  ReorderPayloadT,
} from './model'
import {
  add,
  updateDegree,
  updateUniversity,
  updateDuration,
  erase,
  reorder,
} from './slice'
import { MAX_EDUCATIONS_SIZE } from './constants'

const useEducations = () => {
  const educations = useSelector(selectEducations)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    if (MAX_EDUCATIONS_SIZE <= size(educations)) {
      return
    }

    dispatch(add())
  }, [size(educations)])

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

  const handleReorder = useCallback((payload: ReorderPayloadT) => {
    dispatch(reorder(payload))
  }, [])

  return {
    educations,
    handleAdd,
    handleDegreeChange,
    handleUniversityChange,
    handleDurationChange,
    handleDelete,
    handleReorder,
  }
}

export { useEducations }
