import { ReactNode } from 'react'
import { ButtonProps } from 'shared/ui/Button'

type FormButtonProps = Pick<
  ButtonProps,
  | 'className'
  | 'type'
  | 'appearance'
  | 'withoutPaddings'
  | 'disabled'
  | 'onClick'
> & {
  submittingContent?: ReactNode
}

export default FormButtonProps
