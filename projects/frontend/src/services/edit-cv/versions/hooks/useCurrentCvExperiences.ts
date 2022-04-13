import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateExperiencePayload,
  ReorderExperiencePayload,
  DeleteExperiencePayload,
} from '../model'
import { selectCurrentCvId, selectCurrentCvExperiences } from '../selectors'
import {
  addExperience,
  updateExperience,
  reorderExperience,
  deleteExperience,
} from '../slice'

const useCurrentCvExperiences = () => {
  const id = useSelector(selectCurrentCvId)
  const experiences = useSelector(selectCurrentCvExperiences)

  const dispatch = useDispatch()

  const handleAddExperience = () => {
    dispatch(addExperience({ id }))
  }

  const handleChangeExperience = (
    experienceId: UpdateExperiencePayload['experienceId'],
    position: UpdateExperiencePayload['position'],
    company: UpdateExperiencePayload['company'],
    duration: UpdateExperiencePayload['duration'],
    description: UpdateExperiencePayload['description']
    // eslint-disable-next-line max-params
  ) => {
    dispatch(
      updateExperience({
        id,
        experienceId,
        position,
        company,
        duration,
        description,
      })
    )
  }

  const handleReorderExperience = (
    startIndex: ReorderExperiencePayload['startIndex'],
    endIndex: ReorderExperiencePayload['endIndex']
  ) => {
    dispatch(reorderExperience({ id, startIndex, endIndex }))
  }

  const handleDeleteExperience = (
    experienceId: DeleteExperiencePayload['experienceId']
  ) => {
    dispatch(deleteExperience({ id, experienceId }))
  }

  return {
    experiences,
    addExperience: handleAddExperience,
    changeExperience: handleChangeExperience,
    reorderExperience: handleReorderExperience,
    deleteExperience: handleDeleteExperience,
  }
}

export default useCurrentCvExperiences
