import { FormikHelpers } from 'formik'
import InternalForm from './Form'
import FormProps from './Form.props'
import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Button from './Button'

type InternalFormProps = typeof InternalForm

type FormInterface = InternalFormProps & {
  TextInput: typeof TextInput
  Checkbox: typeof Checkbox
  Button: typeof Button
}

const Form = InternalForm as FormInterface

Form.TextInput = TextInput
Form.Checkbox = Checkbox
Form.Button = Button

export default Form
export type { FormProps }
export type { FormikHelpers as FormHelpers }
