import { Education } from 'services/cv'

type EducationsProps = {
  className?: string
  editable: boolean
  educations: Array<Education>
  maxCount: number
  degreeMaxLength: number
  universityMaxLength: number
  durationMaxLength: number
  onChange: (
    id: string,
    degree: string,
    university: string,
    duration: string
  ) => void
  onReorder: (startIndex: number, endIndex: number) => void
  onDelete: (id: string) => void
  onAdd: () => void
}

export default EducationsProps
