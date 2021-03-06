import useNotification from './useNotification'
import { Notification } from '../NotificationsContext'

type UseWithNotification = {
  <R>(callback: () => R | Promise<R>, options: Options): () => Promise<R>
  <T1, R>(callback: (...args: [T1]) => R | Promise<R>, options: Options): (
    ...args: [T1]
  ) => Promise<R>
  <T1, T2, R>(
    callback: (...args: [T1, T2]) => R | Promise<R>,
    options: Options
  ): (...args: [T1, T2]) => Promise<R>
  <T1, T2, T3, R>(
    callback: (...args: [T1, T2, T3]) => R | Promise<R>,
    options: Options
  ): (...args: [T1, T2, T3]) => Promise<R>
  <T1, T2, T3, T4, R>(
    callback: (...args: [T1, T2, T3, T4]) => R | Promise<R>,
    options: Options
  ): (...args: [T1, T2, T3, T4]) => Promise<R>
  <T1, T2, T3, T4, T5, R>(
    callback: (...args: [T1, T2, T3, T4, T5]) => R | Promise<R>,
    options: Options
  ): (...args: [T1, T2, T3, T4, T5]) => Promise<R>
}

type Options = {
  successContent: Notification['content']
  errorContent: Notification['content']
}

const DURATION = 3_000

const useWithNotification: UseWithNotification = (
  callback: (...args: Array<unknown>) => unknown,
  { successContent, errorContent }: Options
) => {
  const { success, error } = useNotification()

  const handleWithNotification = async (
    ...args: Parameters<typeof callback>
  ) => {
    try {
      const result = await Promise.resolve(callback(...args))

      success(successContent, {
        duration: DURATION,
      })

      return result
    } catch (err) {
      error(errorContent, {
        duration: DURATION,
      })

      throw err
    }
  }

  return handleWithNotification
}

export default useWithNotification
