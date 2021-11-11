import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  add,
  updatePosition,
  updateCompany,
  updateDuration,
  updateDescription,
  erase,
} from './slice'
import { selectExperiences } from './selectors'
import {
  UpdatePositionPayloadT,
  UpdateCompanyPayloadT,
  UpdateDurationPayloadT,
  UpdateDescriptionPayloadT,
  DeletePayloadT,
} from './model'

const useExperiences = () => {
  const experiences = useSelector(selectExperiences)

  const dispatch = useDispatch()

  const handleAdd = useCallback(() => {
    dispatch(add())
  }, [])

  const handlePositionChange = useCallback(
    (payload: UpdatePositionPayloadT) => {
      dispatch(updatePosition(payload))
    },
    []
  )

  const handleCompanyChange = useCallback((payload: UpdateCompanyPayloadT) => {
    dispatch(updateCompany(payload))
  }, [])

  const handleDurationChange = useCallback(
    (payload: UpdateDurationPayloadT) => {
      dispatch(updateDuration(payload))
    },
    []
  )

  const handleDescriptionChange = useCallback(
    (payload: UpdateDescriptionPayloadT) => {
      dispatch(updateDescription(payload))
    },
    []
  )

  const handleDelete = useCallback((payload: DeletePayloadT) => {
    dispatch(erase(payload))
  }, [])

  return {
    experiences,
    handleAdd,
    handlePositionChange,
    handleCompanyChange,
    handleDurationChange,
    handleDescriptionChange,
    handleDelete,
  }
}

export { useExperiences }