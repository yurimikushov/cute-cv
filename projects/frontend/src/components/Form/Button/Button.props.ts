import { ReactNode } from 'react'
import { ButtonProps } from 'components/Button'

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
