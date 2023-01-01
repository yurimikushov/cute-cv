import InternalEducations from './Educations'
import Education from './Education'
import AddButton from './AddButton'

type InternalEducationsProps = typeof InternalEducations

type EducationsInterface = InternalEducationsProps & {
  Education: typeof Education
  AddButton: typeof AddButton
}

const Educations = InternalEducations as EducationsInterface

Educations.Education = Education
Educations.AddButton = AddButton

export default Educations
