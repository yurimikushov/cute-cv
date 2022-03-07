type ButtonProps = {
  className?: string
  type?: 'button' | 'submit'
  appearance: 'outlined' | 'text'
  withoutPaddings?: boolean
  disabled?: boolean
  onClick?: (e: MouseEvent) => void
}

export default ButtonProps
