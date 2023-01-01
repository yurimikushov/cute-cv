import { VFC } from 'react'
import {
  useEditable,
  useCurrentCvExperience,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
} from 'services/edit-cv'
import Experiences from 'shared/ui/cv/page/Experiences'

const ExperienceContainer: VFC<{ id: string }> = ({ id }) => {
  const { editable } = useEditable()
  const { experience, updateExperience, deleteExperience } =
    useCurrentCvExperience(id)

  const { position, company, duration, description } = experience ?? {
    position: '',
    company: '',
    duration: '',
    description: '',
  }

  return (
    <Experiences.Experience
      editable={editable}
      position={position}
      company={company}
      duration={duration}
      description={description}
      positionMaxLength={EXPERIENCE_POSITION_MAX_LENGTH}
      companyMaxLength={EXPERIENCE_COMPANY_MAX_LENGTH}
      durationMaxLength={EXPERIENCE_DURATION_MAX_LENGTH}
      descriptionMaxLength={EXPERIENCE_DESCRIPTION_MAX_LENGTH}
      onPositionChange={(position) =>
        updateExperience({ position, company, duration, description })
      }
      onCompanyChange={(company) =>
        updateExperience({ position, company, duration, description })
      }
      onDurationChange={(duration) =>
        updateExperience({ position, company, duration, description })
      }
      onDescriptionChange={(description) =>
        updateExperience({ position, company, duration, description })
      }
      onDelete={deleteExperience}
    />
  )
}

export default ExperienceContainer
