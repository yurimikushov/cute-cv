import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvEducation,
  EDUCATION_DEGREE_MAX_LENGTH,
  EDUCATION_UNIVERSITY_MAX_LENGTH,
  EDUCATION_DURATION_MAX_LENGTH,
} from 'services/edit-cv'
import Educations from 'shared/ui/cv/page/Educations'

const EducationContainer: VFC<{ id: string }> = ({ id }) => {
  const { editable } = useEditable()
  const { education, updateEducation, deleteEducation } =
    useCurrentCvEducation(id)

  const { degree, university, duration } = education ?? {
    degree: '',
    university: '',
    duration: '',
  }

  return (
    <Educations.Education
      editable={editable}
      degree={degree}
      university={university}
      duration={duration}
      degreeMaxLength={EDUCATION_DEGREE_MAX_LENGTH}
      universityMaxLength={EDUCATION_UNIVERSITY_MAX_LENGTH}
      durationMaxLength={EDUCATION_DURATION_MAX_LENGTH}
      onDegreeChange={(degree) =>
        updateEducation({ degree, university, duration })
      }
      onUniversityChange={(university) =>
        updateEducation({ degree, university, duration })
      }
      onDurationChange={(duration) =>
        updateEducation({ degree, university, duration })
      }
      onDelete={deleteEducation}
    />
  )
}

export default EducationContainer
