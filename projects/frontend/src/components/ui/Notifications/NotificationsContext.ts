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

type NotificationsContextValue = {
  open: (
    content: NotificationContent,
    options?: NotificationOptions
  ) => NotificationId
  success: (
    content: NotificationContent,
    options?: Omit<NotificationOptions, 'type'>
  ) => NotificationId
  error: (
    content: NotificationContent,
    options?: Omit<NotificationOptions, 'type'>
  ) => NotificationId
  close: (id: NotificationId) => void
}

export default createContext<NotificationsContextValue | null>(null)
export type { NotificationsContextValue, Notification }
