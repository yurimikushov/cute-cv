import { HTMLProps } from 'react'

type TextAreaPropsT = Omit<
  HTMLProps<HTMLTextAreaElement>,
  'value' | 'onChange'
> & {
  value: string
  onChange: (value: string) => void
}

export type { TextAreaPropsT }
