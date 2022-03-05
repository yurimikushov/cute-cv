import { TextInputProps } from 'components/TextInput'

type FormTextInputProps = {
  containerClassName?: string
  id?: string
  name: string
} & Pick<
  TextInputProps,
  'className' | 'readonly' | 'disabled' | 'size' | 'placeholder' | 'maxLength'
>

export default FormTextInputProps
