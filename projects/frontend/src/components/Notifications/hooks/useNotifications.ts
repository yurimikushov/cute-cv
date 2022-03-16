import { useCallback, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import reject from 'lodash/reject'
import { Notification } from '../NotificationsContext'

const useNotifications = () => {
  const [notifications, setNotifications] = useState<Array<Notification>>([])

  const showNotification = useCallback(
    (content: Notification['content']): Notification['id'] => {
      const notificationId = nanoid()

      setNotifications((notifications) => [
        ...notifications,
        {
          id: notificationId,
          content,
        },
      ])

      return notificationId
    },
    []
  )

  const hideNotification = useCallback((id: string) => {
    setNotifications((notifications) => reject(notifications, { id }))
  }, [])

  return {
    notifications,
    showNotification,
    hideNotification,
  }
}

export default useNotifications
