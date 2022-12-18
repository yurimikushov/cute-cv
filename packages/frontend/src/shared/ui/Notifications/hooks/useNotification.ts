import { useContext } from 'react'
import NotificationsContext from '../NotificationsContext'

const useNotification = () => {
  const notifications = useContext(NotificationsContext)

  if (!notifications) {
    throw new Error(
      '[Notifications] `useNotification` must be wrapped in <NotificationsProvider />'
    )
  }

  return notifications
}

export default useNotification
