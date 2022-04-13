import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateEducationPayload,
  ReorderEducationPayload,
  DeleteEducationPayload,
} from '../model'
import { selectCurrentCvId, selectCurrentCvEducations } from '../selectors'
import {
  addEduction,
  updateEduction,
  reorderEducation,
  deleteEducation,
} from '../slice'

const useCurrentCvEducations = () => {
  const id = useSelector(selectCurrentCvId)
  const educations = useSelector(selectCurrentCvEducations)

  const dispatch = useDispatch()

  const handleAddEducation = () => {
    dispatch(addEduction({ id }))
  }

  const handleChangeEducation = (
    educationId: UpdateEducationPayload['educationId'],
    degree: UpdateEducationPayload['degree'],
    university: UpdateEducationPayload['university'],
    duration: UpdateEducationPayload['duration']
    // eslint-disable-next-line max-params
  ) => {
    dispatch(
      updateEduction({
        id,
        educationId,
        degree,
        university,
        duration,
      })
    )
  }

  const handleReorderEducation = (
    startIndex: ReorderEducationPayload['startIndex'],
    endIndex: ReorderEducationPayload['endIndex']
  ) => {
    dispatch(reorderEducation({ id, startIndex, endIndex }))
  }

  const handleDeleteEducation = (
    educationId: DeleteEducationPayload['educationId']
  ) => {
    dispatch(deleteEducation({ id, educationId }))
  }

  return {
    educations,
    addEduction: handleAddEducation,
    changeEducation: handleChangeEducation,
    reorderEducation: handleReorderEducation,
    deleteEducation: handleDeleteEducation,
  }
}

export default useCurrentCvEducations
