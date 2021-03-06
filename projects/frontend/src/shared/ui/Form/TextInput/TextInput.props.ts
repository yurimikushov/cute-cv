import { RefObject } from 'react'
import { TextInputProps } from 'shared/ui/TextInput'

type FormTextInputProps = {
  inputRef?: RefObject<HTMLInputElement>
  containerClassName?: string
  id?: string
  name: string
} & Pick<
  TextInputProps,
  | 'className'
  | 'readonly'
  | 'disabled'
  | 'size'
  | 'placeholder'
  | 'autoComplete'
  | 'maxLength'
>

export default FormTextInputProps
