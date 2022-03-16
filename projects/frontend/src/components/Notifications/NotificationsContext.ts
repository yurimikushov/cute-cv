import { createContext } from 'react'

type NotificationId = string
type NotificationContent = string | JSX.Element

type Notification = {
  id: NotificationId
  content: NotificationContent
}

type NotificationsContext = {
  show: (content: NotificationContent) => NotificationId
  hide: (id: NotificationId) => void
}

export default createContext<NotificationsContext | null>(null)
export type { Notification }
