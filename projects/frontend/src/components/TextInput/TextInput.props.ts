type TextInputPropsT = {
  className?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export default TextInputPropsT
