import { Language } from 'services/cv'

type LanguagesProps = {
  className?: string
  editable: boolean
  languages: Array<Language>
  maxCount: number
  maxLength: number
  onChange: (id: string, value: string) => void
  onDelete: (id: string) => void
  onAdd: () => void
}

export default LanguagesProps
