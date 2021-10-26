import { HTMLProps } from 'react'

type TextInputPropsT = Omit<
  HTMLProps<HTMLInputElement>,
  'size' | 'value' | 'onChange'
> & {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  value: string
  onChange: (value: string) => void
}

export default TextInputPropsT
