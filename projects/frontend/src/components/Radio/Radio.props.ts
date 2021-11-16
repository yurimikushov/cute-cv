import { HTMLProps } from 'react'

type RadioPropsT = Omit<HTMLProps<HTMLDivElement>, 'onChange'> & {
  activeOption: string
  options: Array<string>
  onChange: (activeOption: string) => void
}

export default RadioPropsT
