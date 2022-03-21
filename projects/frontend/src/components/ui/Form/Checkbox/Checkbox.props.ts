import { CheckboxProps } from 'components/ui/Checkbox'

type FormCheckboxProps = {
  id?: string
  name: string
} & Pick<CheckboxProps, 'className' | 'disabled'>

export default FormCheckboxProps
