type LanguageProps = {
  className?: string
  editable?: boolean
  language: string
  maxLength?: number
  onChange?: (language: string) => void
  onDelete?: () => void
}

export default LanguageProps
