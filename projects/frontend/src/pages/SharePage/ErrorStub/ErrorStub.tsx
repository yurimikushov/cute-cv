import { FC } from 'react'
import styled from 'styled-components'
import ErrorStubProps from './ErrorStub.props'

const Container = styled.div``

const ErrorStub: FC<ErrorStubProps> = (props) => {
  return (
    <Container {...props}>Here error stub. It should be described</Container>
  )
}

export default ErrorStub
