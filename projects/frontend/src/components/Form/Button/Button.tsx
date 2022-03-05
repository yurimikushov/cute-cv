import { FC } from 'react'
import { useFormikContext } from 'formik'
import Button from 'components/Button'
import FormButtonProps from './Button.props'

const FormButton: FC<FormButtonProps> = ({ children, ...props }) => {
  const { isSubmitting } = useFormikContext()

  return (
    <Button {...props} disabled={isSubmitting}>
      {children}
    </Button>
  )
}

export default FormButton
