import { ChangeEvent, FocusEvent } from 'react'

type TextAreaProps = {
  className?: string
  readonly?: boolean
  disabled?: boolean
  value: string
  placeholder?: string
  maxLength?: number
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
}

export default TextAreaProps
