import { FC } from 'react'
import styled from 'styled-components'
import zIndex from 'shared/styles/zIndex'
import Notification from './Notification'
import NotificationsProps from './Notifications.props'

const Container = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: ${zIndex.notifications};

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  /* it makes space between notifications clickable */
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  @media print {
    display: none;
  }
`

const Notifications: FC<NotificationsProps> = ({
  notifications,
  onClose,
  ...props
}) => {
  return (
    <Container {...props}>
      {notifications.map(({ id, content, options }) => (
        <Notification key={id} id={id} options={options} onClose={onClose}>
          {content}
        </Notification>
      ))}
    </Container>
  )
}

export default Notifications
