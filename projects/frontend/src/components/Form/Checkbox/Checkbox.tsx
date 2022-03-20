import { FC } from 'react'
import { useFormikContext } from 'formik'
import Checkbox from 'components/Checkbox'
import FormCheckboxProps from './Checkbox.props'

const FormCheckbox: FC<FormCheckboxProps> = ({
  disabled,
  children,
  ...props
}) => {
  const { isSubmitting } = useFormikContext()

  return (
    <Checkbox {...props} disabled={disabled || isSubmitting}>
      {children}
    </Checkbox>
  )
}

export default FormCheckbox
