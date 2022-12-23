import { useCallback, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import reject from 'shared/lib/reject'
import { Notification } from '../NotificationsContext'

const useNotifications = () => {
  const [notifications, setNotifications] = useState<Array<Notification>>([])

  const showNotification = useCallback(
    (
      content: Notification['content'],
      options: Notification['options'] = {}
    ): Notification['id'] => {
      const notificationId = nanoid()

      setNotifications((notifications) => [
        {
          id: notificationId,
          content,
          options,
        },
        ...notifications,
      ])

      return notificationId
    },
    []
  )

  const closeNotification = useCallback((id: Notification['id']) => {
    setNotifications((notifications) => reject(notifications, { id }))
  }, [])

  return {
    notifications,
    showNotification,
    closeNotification,
  }
}

export default useNotifications
