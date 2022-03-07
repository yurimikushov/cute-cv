import { ButtonProps } from 'components/Button'

type FormButtonProps = Pick<
  ButtonProps,
  | 'className'
  | 'type'
  | 'appearance'
  | 'withoutPaddings'
  | 'disabled'
  | 'onClick'
>

export default FormButtonProps
