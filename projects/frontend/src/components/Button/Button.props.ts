import { HTMLProps } from 'react'

type ButtonPropsT = HTMLProps<HTMLButtonElement> & {
  withPaddings?: boolean
}

export default ButtonPropsT
