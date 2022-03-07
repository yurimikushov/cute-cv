import { ButtonProps } from 'components/Button'

type FormButtonProps = Pick<
  ButtonProps,
  'className' | 'type' | 'appearance' | 'withPaddings' | 'disabled' | 'onClick'
>

export default FormButtonProps
