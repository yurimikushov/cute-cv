import { DetailedHTMLProps, HTMLAttributes } from 'react'

// TODO: should extract to core types
type HTMLElementPropsT<T> = DetailedHTMLProps<HTMLAttributes<T>, T>

type TextInputPropsT = Omit<HTMLElementPropsT<HTMLInputElement>, 'onChange'> & {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  value: string
  onChange: (value: string) => void
}

export type { TextInputPropsT }
