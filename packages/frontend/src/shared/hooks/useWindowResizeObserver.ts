import { DependencyList, useEffect } from 'react'

const useWindowResizeObserver = (
  listener: (e: Event) => void,
  deps: DependencyList
) => {
  useEffect(() => {
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, deps)
}

export default useWindowResizeObserver
