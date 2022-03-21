import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import Checkbox from 'components/ui/Checkbox'
import FormCheckboxProps from './Checkbox.props'

const FormCheckbox: FC<FormCheckboxProps> = ({
  disabled,
  children,
  ...props
}) => {
  const [field] = useField(props)
  const { isSubmitting } = useFormikContext()

  return (
    <Checkbox {...props} {...field} disabled={disabled || isSubmitting}>
      {children}
    </Checkbox>
  )
}

export default FormCheckbox
