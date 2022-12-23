import { useEffect, useRef } from 'react'
import nonNullable from 'shared/lib/nonNullable'

const useTimer = (duration: number, callback: () => void) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (duration < 0) {
      return
    }

    timerRef.current = setTimeout(callback, duration)

    return () => {
      clearTimeout(nonNullable(timerRef.current))
    }
  }, [duration, callback])
}

export default useTimer
