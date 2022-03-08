import { FC } from 'react'
import { useField } from 'formik'
import styled from 'styled-components'
import TextInput from 'components/TextInput'
import colors from 'styles/colors'
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
  ...props
}) => {
  const [field, { touched, error }] = useField(props)

  return (
    <Container className={containerClassName}>
      <TextInput {...props} {...field} ref={inputRef} />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default FormTextInput
