import { CheckboxProps } from 'components/ui/Checkbox'

type FormCheckboxProps = Pick<
  CheckboxProps,
  'className' | 'value' | 'disabled' | 'onChange'
>

export default FormCheckboxProps
