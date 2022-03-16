import { FC } from 'react'
import styled from 'styled-components'
import { CloseButton } from 'components/Button'
import colors from 'styles/colors'
import shadows from 'styles/shadows'
import radiuses from 'styles/radiuses'
import keyframes from 'styles/keyframes'
import NotificationProps from './Notification.props'

const Container = styled.div`
  max-width: 24rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;

  padding: 0.5rem;
  background-color: ${colors.white};
  border-radius: ${radiuses.md};
  box-shadow: ${shadows.sm};

  animation: ${keyframes['shake-with-delay']} 7s ease 1s infinite;

  &:hover {
    animation: none;
  }
`

const Content = styled.div`
  max-width: 20rem;
`

const Notification: FC<NotificationProps> = ({
  children,
  onHide,
  ...props
}) => {
  return (
    <Container {...props}>
      <Content>{children}</Content>
      <CloseButton onClick={onHide} />
    </Container>
  )
}

export default Notification
