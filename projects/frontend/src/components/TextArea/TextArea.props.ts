import { HTMLProps } from 'react'

type TextAreaPropsT = Pick<
  HTMLProps<HTMLTextAreaElement>,
  'className' | 'disabled' | 'placeholder'
> & {
  value: string
  onChange: (value: string) => void
}

export default TextAreaPropsT
