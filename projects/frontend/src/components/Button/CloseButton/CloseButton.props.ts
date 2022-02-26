import { HTMLProps } from 'react'

type CloseButtonPropsT = Pick<
  HTMLProps<HTMLButtonElement>,
  'className' | 'disabled' | 'onClick'
>

export default CloseButtonPropsT
