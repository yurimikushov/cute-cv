import { Experience } from 'services/edit-cv'

type ExperiencesProps = {
  className?: string
  experiences: Array<Experience>
  maxCount?: number
  positionMaxLength?: number
  companyMaxLength?: number
  durationMaxLength?: number
  descriptionMaxLength?: number
} & (
  | {
      editable: boolean
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
  | {
      editable: false
      onChange?: never
      onReorder?: never
      onDelete?: never
      onAdd?: never
    }
)

export default ExperiencesProps
