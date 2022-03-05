import { Formik, Form as FormikForm } from 'formik'
import FormProps from './Form.props'

const Form = <T,>({
  className,
  children,
  ...props
}: FormProps<T>): JSX.Element => {
  return (
    <Formik {...props}>
      <FormikForm className={className}>{children}</FormikForm>
    </Formik>
  )
}

export default Form
