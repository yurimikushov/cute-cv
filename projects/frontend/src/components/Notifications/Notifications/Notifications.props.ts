import { Notification } from '../NotificationsContext'

type NotificationsProps = {
  className?: string
  notifications: Array<Notification>
  onHide: (id: Notification['id']) => void
}

export default NotificationsProps
