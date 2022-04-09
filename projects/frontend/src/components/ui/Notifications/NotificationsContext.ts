import { createContext } from 'react'

type NotificationId = string
type NotificationType = 'success' | 'error' | 'none'
type NotificationContent = string | JSX.Element

type NotificationOptions = {
  type?: NotificationType
  duration?: number
}

type Notification = {
  id: NotificationId
  content: NotificationContent
  options: NotificationOptions
}

type NotificationsContext = {
  open: (
    content: NotificationContent,
    options?: NotificationOptions
  ) => NotificationId
  close: (id: NotificationId) => void
}

export default createContext<NotificationsContext | null>(null)
export type { Notification }
