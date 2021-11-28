import { HTMLProps } from 'react'

type ButtonPropsT = Pick<
  HTMLProps<HTMLButtonElement>,
  'className' | 'children' | 'onClick'
> & {
  withPaddings?: boolean
}

export default ButtonPropsT
