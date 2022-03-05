import { ButtonProps } from 'components/Button'

type FormButtonProps = Pick<
  ButtonProps,
  'className' | 'type' | 'withPaddings' | 'disabled' | 'onClick'
>

export default FormButtonProps
