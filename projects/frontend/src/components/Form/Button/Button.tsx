import { FC } from 'react'
import { useFormikContext } from 'formik'
import Button from 'components/Button'
import FormButtonProps from './Button.props'

const FormButton: FC<FormButtonProps> = ({
  disabled,
  submittingContent,
  children,
  ...props
}) => {
  const { isSubmitting } = useFormikContext()

  return (
    <Button {...props} disabled={disabled || isSubmitting}>
      {isSubmitting && submittingContent ? submittingContent : children}
    </Button>
  )
}

export default FormButton
