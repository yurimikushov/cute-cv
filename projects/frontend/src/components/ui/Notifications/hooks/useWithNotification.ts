import useNotification from './useNotification'
import { Notification } from '../NotificationsContext'

type Options = {
  successContent: Notification['content']
  errorContent: Notification['content']
}

const DURATION = 3_000

// TODO: should describe `callback` better

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useWithNotification = <T extends (...args: any) => any>(
  callback: T,
  { successContent, errorContent }: Options
) => {
  const { success, error } = useNotification()

  const handleWithNotification = async (...args: Parameters<T>) => {
    try {
      const result = await Promise.resolve(callback(...args))

      success(successContent, {
        duration: DURATION,
      })

      return result
    } catch {
      error(errorContent, {
        duration: DURATION,
      })
    }
  }

  return handleWithNotification
}

export default useWithNotification
