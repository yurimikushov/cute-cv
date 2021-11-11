import { HTMLProps } from 'react'

type CardPropsT = HTMLProps<HTMLDivElement> & {
  withBorder?: boolean
  hasClose?: boolean
  onClose?: () => void
}

export default CardPropsT
