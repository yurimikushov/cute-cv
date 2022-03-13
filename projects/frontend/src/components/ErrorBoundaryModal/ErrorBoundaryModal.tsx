import { FC } from 'react'
import styled from 'styled-components'
import Modal from 'components/Modal'
import Button from 'components/Button'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import ErrorBoundaryModalProps from './ErrorBoundaryModal.props'

const Container = styled(Modal)`
  padding: 1.5rem 2rem;

  & > * + * {
    margin-top: 1rem;
  }
`

const Title = styled.h1`
  font-size: ${fonts.size['2xl']};
  font-weight: bold;
  color: ${colors.black};
`

const Error = styled.p`
  font-size: ${fonts.size.lg};
  color: ${colors.black};
`

const ErrorBoundaryModal: FC<ErrorBoundaryModalProps> = ({
  onResetErrorBoundary,
  ...props
}) => {
  return (
    <Container {...props}>
      <Title>An error has occurred</Title>
      <Error>Sorry, but please try that again later</Error>
      <Button appearance='outlined' onClick={onResetErrorBoundary}>
        Try again
      </Button>
    </Container>
  )
}

export default ErrorBoundaryModal
