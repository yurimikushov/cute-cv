import { RefObject, useEffect, useImperativeHandle, useRef } from 'react'

const useAutoFocus = <T extends HTMLElement>(anotherRef?: RefObject<T>) => {
  const elementRef = useRef<T>(null)

  useImperativeHandle(anotherRef, () => elementRef.current as T)

  useEffect(() => {
    elementRef.current?.focus()
  }, [])

  return elementRef
}
export default useAutoFocus
