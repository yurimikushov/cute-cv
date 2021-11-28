import { HTMLProps } from 'react'

type CloseButtonPropsT = Pick<
  HTMLProps<HTMLButtonElement>,
  'className' | 'onClick'
>

export default CloseButtonPropsT
