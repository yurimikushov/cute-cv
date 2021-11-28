import { FC, cloneElement } from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import radiuses from 'styles/radiuses'
import SignInButtonPropsT from './SignInButton.props'

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-width: 1px;
  border-radius: ${radiuses.md};
`

const Icon = styled(({ children, ...props }) => cloneElement(children, props))`
  width: 1.75rem;
  height: 1.75rem;
`

const Title = styled.span`
  white-space: nowrap;
`

const SignInButton: FC<SignInButtonPropsT> = ({
  icon,
  children: title,
  ...props
}) => (
  <StyledButton {...props}>
    <Icon>{icon}</Icon>
    <Title>{title}</Title>
  </StyledButton>
)

export default SignInButton
