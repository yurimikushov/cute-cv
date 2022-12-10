import { MouseEvent } from 'react'

type ButtonProps = {
  className?: string
  type?: 'button' | 'submit'
  appearance: 'outlined' | 'text'
  withoutPaddings?: boolean
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default ButtonProps
