import { FC } from 'react'
import styled from 'styled-components'
import Card from 'shared/ui/Card'
import fonts from 'shared/styles/fonts'
import ErrorStubProps from './ErrorStub.props'

const Container = styled(Card).attrs({
  withBorder: false,
})`
  max-width: 36rem;
  padding: 1.5rem 2rem;
  font-size: ${fonts.size.xl};
  font-weight: bold;
`

const ErrorStub: FC<ErrorStubProps> = ({ message, ...props }) => {
  return <Container {...props}>{message}</Container>
}

export default ErrorStub
