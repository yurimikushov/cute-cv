import { RefObject } from 'react'
import { TextInputProps } from 'components/TextInput'

type FormTextInputProps = {
  inputRef?: RefObject<HTMLInputElement>
  containerClassName?: string
  id?: string
  name: string
} & Pick<
  TextInputProps,
  'className' | 'readonly' | 'disabled' | 'size' | 'placeholder' | 'maxLength'
>

export default FormTextInputProps
