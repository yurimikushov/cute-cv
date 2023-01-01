import InternalExperiences from './Experiences'
import Experience from './Experience'
import AddButton from './AddButton'

type InternalExperiencesProps = typeof InternalExperiences

type ExperiencesInterface = InternalExperiencesProps & {
  Experience: typeof Experience
  AddButton: typeof AddButton
}

const Experiences = InternalExperiences as ExperiencesInterface

Experiences.Experience = Experience
Experiences.AddButton = AddButton

export default Experiences
