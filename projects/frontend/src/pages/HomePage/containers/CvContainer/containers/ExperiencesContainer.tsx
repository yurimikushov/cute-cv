import { FC } from 'react'
import isEmpty from 'lodash/isEmpty'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import {
  useEditable,
  useCurrentCvExperiences,
  EXPERIENCES_MAX_COUNT,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
} from 'services/edit-cv'
import Experiences from 'components/cv/page/Experiences'

const ExperiencesContainer: FC = () => {
  const { editable } = useEditable()
  const {
    experiences,
    changeExperience,
    reorderExperience,
    deleteExperience,
    addExperience,
  } = useCurrentCvExperiences()

  useLayoutEffectWhen(addExperience, isEmpty(experiences))

  return (
    <Experiences
      editable={editable}
      experiences={experiences}
      maxCount={EXPERIENCES_MAX_COUNT}
      positionMaxLength={EXPERIENCE_POSITION_MAX_LENGTH}
      companyMaxLength={EXPERIENCE_COMPANY_MAX_LENGTH}
      durationMaxLength={EXPERIENCE_DURATION_MAX_LENGTH}
      descriptionMaxLength={EXPERIENCE_DESCRIPTION_MAX_LENGTH}
      onChange={changeExperience}
      onReorder={reorderExperience}
      onDelete={deleteExperience}
      onAdd={addExperience}
    />
  )
}

export default ExperiencesContainer
