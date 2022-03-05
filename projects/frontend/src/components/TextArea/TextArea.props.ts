type TextAreaPropsT = {
  className?: string
  readonly?: boolean
  value: string
  placeholder?: string
  maxLength?: number
  onChange: (value: string) => void
}

export default TextAreaPropsT
