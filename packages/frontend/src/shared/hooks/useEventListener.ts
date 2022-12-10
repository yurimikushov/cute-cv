import { useEffect, useRef } from 'react'

const useEventListener = <T extends keyof WindowEventMap>(
  eventName: T,
  listener: (event: WindowEventMap[T]) => void,
  options?: boolean | AddEventListenerOptions
) => {
  const listenerRef = useRef<typeof listener>(listener)

  listenerRef.current = listener

  useEffect(() => {
    const handleEvent: typeof listener = (event) => {
      listenerRef.current(event)
    }

    window.addEventListener(eventName, handleEvent, options)

    return () => {
      window.removeEventListener(eventName, handleEvent)
    }
  }, [eventName, options])
}

export default useEventListener
