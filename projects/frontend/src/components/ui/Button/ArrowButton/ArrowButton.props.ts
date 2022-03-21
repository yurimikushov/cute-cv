import { HTMLProps } from 'react'

type ArrowButtonProps = Pick<
  HTMLProps<HTMLButtonElement>,
  'className' | 'disabled' | 'onClick' | 'onKeyDown'
>

export default ArrowButtonProps
