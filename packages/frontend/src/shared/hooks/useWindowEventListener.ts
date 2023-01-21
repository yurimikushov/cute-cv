import { useEffect } from 'react'
import useFunctionRef from './useFunctionRef'

const useWindowEventListener = <T extends keyof WindowEventMap>(
  eventName: T,
  listener: (event: WindowEventMap[T]) => void,
  options?: boolean | AddEventListenerOptions
) => {
  const listenerRef = useFunctionRef(listener)

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

export default useWindowEventListener
