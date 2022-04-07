import { Notification } from '../../NotificationsContext'

type NotificationProps = {
  className?: string
  id: Notification['id']
  options: Notification['options']
  onHide: (id: Notification['id']) => void
}

export default NotificationProps
