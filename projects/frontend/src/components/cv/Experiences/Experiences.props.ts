import { Experience } from 'services/edit-cv'

type ExperiencesProps = {
  className?: string
  editable: boolean
  experiences: Array<Experience>
  maxCount: number
  positionMaxLength: number
  companyMaxLength: number
  durationMaxLength: number
  descriptionMaxLength: number
  onChange: (
    id: string,
    position: string,
    company: string,
    duration: string,
    description: string
  ) => void
  onReorder: (startIndex: number, endIndex: number) => void
  onDelete: (id: string) => void
  onAdd: () => void
}

export default ExperiencesProps
