import { DependencyList, useLayoutEffect, useRef, useState } from 'react'

const useRecalcElementHeight = <T extends HTMLElement>(
  deps: DependencyList
) => {
  const ref = useRef<T>(null)
  const [height, setHeight] = useState('auto')

  useLayoutEffect(() => {
    setHeight('auto')
  }, deps)

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    if (height !== 'auto') {
      return
    }

    setHeight(`${ref.current.scrollHeight}px`)
  }, [...deps, height])

  return {
    ref,
    height,
  }
}

export default useRecalcElementHeight
