import { EffectCallback, useLayoutEffect } from 'react'
import useFunctionRef from './useFunctionRef'

const useLayoutEffectWhen = (effect: EffectCallback, predicate: boolean) => {
  const effectRef = useFunctionRef(effect)

  useLayoutEffect(() => {
    if (!predicate) {
      return
    }

    return effectRef.current()
  }, [predicate])
}

export default useLayoutEffectWhen
