import { ChangeEvent, FocusEvent } from 'react'

type TextInputPropsT = {
  className?: string
  readonly?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  value: string
  placeholder?: string
  maxLength?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

export default TextInputPropsT
