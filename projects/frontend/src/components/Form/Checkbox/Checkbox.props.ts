import { CheckboxProps } from 'components/Checkbox'

type FormCheckboxProps = Pick<
  CheckboxProps,
  'className' | 'value' | 'disabled' | 'onChange'
>

export default FormCheckboxProps
