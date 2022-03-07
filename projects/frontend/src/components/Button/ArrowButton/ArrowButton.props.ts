import { HTMLProps } from 'react'

type ArrowButtonProps = Pick<
  HTMLProps<HTMLButtonElement>,
  'className' | 'disabled' | 'onClick'
>

export default ArrowButtonProps
