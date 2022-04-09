import { FC, useMemo } from 'react'
import Portal from 'components/ui/Portal'
import useNotifications from './hooks/useNotifications'
import NotificationsContext, {
  NotificationsContextValue,
} from './NotificationsContext'
import Notifications from './Notifications'

const NotificationsProvider: FC = ({ children }) => {
  const { notifications, showNotification, closeNotification } =
    useNotifications()

  const contextValue = useMemo(
    (): NotificationsContextValue => ({
      open: showNotification,
      success: (content, options) => {
        return showNotification(content, { ...options, type: 'success' })
      },
      error: (content, options) => {
        return showNotification(content, { ...options, type: 'error' })
      },
      close: closeNotification,
    }),
    [showNotification, closeNotification]
  )

  return (
    <NotificationsContext.Provider value={contextValue}>
      {children}
      <Portal>
        <Notifications
          notifications={notifications}
          onClose={closeNotification}
        />
      </Portal>
    </NotificationsContext.Provider>
  )
}

export default NotificationsProvider
