import { HTMLProps } from 'react'

type TextInputPropsT = Pick<
  HTMLProps<HTMLInputElement>,
  'className' | 'disabled' | 'placeholder'
> & {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  value: string
  onChange: (value: string) => void
}

export default TextInputPropsT
