import { FC } from 'react'
import { useField, useFormikContext } from 'formik'
import styled from 'styled-components'
import TextInput from 'shared/ui/TextInput'
import colors from 'shared/styles/colors'
import FromTextInputProps from './TextInput.props'

const Container = styled.div``

const ErrorMessage = styled.div`
  margin-top: 0.3rem;
  margin-left: 0.1rem;
  color: ${colors.red300};
`

const FormTextInput: FC<FromTextInputProps> = ({
  inputRef,
  containerClassName,
  disabled,
  ...props
}) => {
  const [field, { touched, error }] = useField(props)
  const { isSubmitting } = useFormikContext()

  return (
    <Container className={containerClassName}>
      <TextInput
        {...props}
        {...field}
        ref={inputRef}
        disabled={disabled || isSubmitting}
      />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default FormTextInput
