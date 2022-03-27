import { Language } from 'services/edit-cv'

type LanguagesProps = {
  className?: string
  languages: Array<Language>
  maxCount?: number
  maxLength?: number
} & (
  | {
      editable: boolean
      onChange: (id: string, value: string) => void
      onDelete: (id: string) => void
      onAdd: () => void
    }
  | {
      editable: false
      onChange?: never
      onDelete?: never
      onAdd?: never
    }
)

export default LanguagesProps
