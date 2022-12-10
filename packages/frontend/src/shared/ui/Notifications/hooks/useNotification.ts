import { useContext } from 'react'
import isNull from 'lodash/isNull'
import NotificationsContext from '../NotificationsContext'

const useNotification = () => {
  const notifications = useContext(NotificationsContext)

  if (isNull(notifications)) {
    throw new Error(
      '[Notifications] `useNotification` must be wrapped in <NotificationsProvider />'
    )
  }

  return notifications
}

export default useNotification
