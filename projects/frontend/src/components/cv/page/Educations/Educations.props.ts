import { Education } from 'services/edit-cv'

type EducationsProps = {
  className?: string
  educations: Array<Education>
  maxCount?: number
  degreeMaxLength?: number
  universityMaxLength?: number
  durationMaxLength?: number
} & (
  | {
      editable: boolean
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
  | {
      editable: false
      onChange?: never
      onReorder?: never
      onDelete?: never
      onAdd?: never
    }
)

export default EducationsProps
