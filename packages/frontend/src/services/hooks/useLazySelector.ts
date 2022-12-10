import { useCallback } from 'react'
import store, { RootState } from 'services/store'

const useLazySelector = <T>(selector: (state: RootState) => T) => {
  return useCallback(() => {
    return selector(store.getState())
  }, [selector])
}

export default useLazySelector
