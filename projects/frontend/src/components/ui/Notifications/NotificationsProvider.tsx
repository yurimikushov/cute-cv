import { FC, useMemo } from 'react'
import Portal from 'components/ui/Portal'
import useNotifications from './hooks/useNotifications'
import NotificationsContext from './NotificationsContext'
import Notifications from './Notifications'

const NotificationsProvider: FC = ({ children }) => {
  const { notifications, showNotification, hideNotification } =
    useNotifications()

  const contextValue = useMemo(
    () => ({
      show: showNotification,
      hide: hideNotification,
    }),
    [showNotification, hideNotification]
  )

  return (
    <NotificationsContext.Provider value={contextValue}>
      {children}
      <Portal>
        <Notifications
          notifications={notifications}
          onHide={hideNotification}
        />
      </Portal>
    </NotificationsContext.Provider>
  )
}

export default NotificationsProvider
