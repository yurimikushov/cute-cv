import { FC } from 'react'
import isEmpty from 'lodash/isEmpty'
import useLayoutEffectWhen from 'shared/hooks/useLayoutEffectWhen'
import {
  useEditable,
  useCurrentCvEducations,
  EDUCATIONS_MAX_COUNT,
  EDUCATION_DEGREE_MAX_LENGTH,
  EDUCATION_UNIVERSITY_MAX_LENGTH,
  EDUCATION_DURATION_MAX_LENGTH,
} from 'services/edit-cv'
import Educations from 'shared/ui/cv/page/Educations'

const EducationsContainer: FC = () => {
  const { editable } = useEditable()
  const {
    educations,
    changeEducation,
    reorderEducation,
    deleteEducation,
    addEduction,
  } = useCurrentCvEducations()

  useLayoutEffectWhen(addEduction, isEmpty(educations))

  return (
    <Educations
      editable={editable}
      educations={educations}
      maxCount={EDUCATIONS_MAX_COUNT}
      degreeMaxLength={EDUCATION_DEGREE_MAX_LENGTH}
      universityMaxLength={EDUCATION_UNIVERSITY_MAX_LENGTH}
      durationMaxLength={EDUCATION_DURATION_MAX_LENGTH}
      onChange={changeEducation}
      onReorder={reorderEducation}
      onDelete={deleteEducation}
      onAdd={addEduction}
    />
  )
}

export default EducationsContainer
