import { HTMLProps } from 'react'

type CloseButtonProps = Pick<
  HTMLProps<HTMLButtonElement>,
  'className' | 'disabled' | 'onClick'
>

export default CloseButtonProps
