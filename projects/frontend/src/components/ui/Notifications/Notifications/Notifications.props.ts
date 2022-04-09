import { Notification } from '../NotificationsContext'

type NotificationsProps = {
  className?: string
  notifications: Array<Notification>
  onClose: (id: Notification['id']) => void
}

export default NotificationsProps
