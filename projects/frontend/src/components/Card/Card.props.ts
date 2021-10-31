import { HTMLProps } from 'react'

type NonClosableT = {
  hasClose?: false | never
  onClose?: never
}

type ClosableT = {
  hasClose: true
  onClose: () => void
}

type CardPropsT = HTMLProps<HTMLDivElement> & (NonClosableT | ClosableT)

export default CardPropsT
