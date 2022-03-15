import { DependencyList, useLayoutEffect, useRef, useState } from 'react'
import isNull from 'lodash/isNull'

const useRecalcElementHeight = <T extends HTMLElement>(deps: DependencyList) => {
  const ref = useRef<T>(null)
  const [height, setHeight] = useState('auto')

  useLayoutEffect(() => {
    setHeight('auto')
  }, deps)

  useLayoutEffect(() => {
    if (isNull(ref.current)) {
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
