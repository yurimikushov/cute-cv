import { useRef } from 'react'

const useLazyRef = <T>(init: () => T) => {
  const ref = useRef<T>()

  if (!ref.current) {
    ref.current = init()
  }

  return ref as { current: T }
}

export default useLazyRef
