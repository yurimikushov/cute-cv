import { FC, cloneElement } from 'react'
import styled from 'styled-components'
import BaseButton from 'shared/ui/Button'
import SignInButtonProps from './SignInButton.props'

const Button = styled(BaseButton)`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const Icon = styled(({ children, ...props }) => cloneElement(children, props))`
  width: 1.75rem;
  height: 1.75rem;
`

const Title = styled.span`
  white-space: nowrap;
`

const SignInButton: FC<SignInButtonProps> = ({
  icon,
  children: title,
  ...props
}) => (
  <Button {...props} appearance='outlined'>
    <Icon>{icon}</Icon>
    <Title>{title}</Title>
  </Button>
)

export default SignInButton
