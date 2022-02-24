import { EffectCallback, useLayoutEffect } from 'react'

const useLayoutEffectWhen = (effect: EffectCallback, predicate: boolean) => {
  useLayoutEffect(() => {
    if (!predicate) {
      return
    }

    return effect()
  }, [predicate])
}

export default useLayoutEffectWhen
