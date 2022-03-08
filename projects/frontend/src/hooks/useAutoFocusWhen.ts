import { RefObject, useImperativeHandle, useRef } from 'react'
import useEffectWhen from './useEffectWhen'

type UseAutoFocusWhen<T> = {
  predicate: boolean
  ref?: RefObject<T>
}

const useAutoFocusWhen = <T extends HTMLElement>({
  predicate,
  ref,
}: UseAutoFocusWhen<T>) => {
  const elementRef = useRef<T>(null)

  useImperativeHandle(ref, () => elementRef.current as T)

  useEffectWhen(() => {
    elementRef.current?.focus()
  }, predicate)

  return elementRef
}
export default useAutoFocusWhen
