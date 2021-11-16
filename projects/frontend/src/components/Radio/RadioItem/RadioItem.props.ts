import { HTMLProps } from 'react'

type RadioItemPropsT = Omit<HTMLProps<HTMLLabelElement>, 'onChange'> & {
  isActive: boolean
  option: string
  onChange: (option: string) => void
}

export default RadioItemPropsT
