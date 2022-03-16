import { FC } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import zIndex from 'styles/zIndex'
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
`

const Notifications: FC<NotificationsProps> = ({
  notifications,
  onHide,
  ...props
}) => {
  return (
    <Container {...props}>
      {map(notifications, ({ id, content }) => (
        <Notification key={id} onHide={() => onHide(id)}>
          {content}
        </Notification>
      ))}
    </Container>
  )
}

export default Notifications
