import { DependencyList, useLayoutEffect, useRef, useState } from 'react'
import isNull from 'lodash/isNull'

const useElementHeight = <T extends HTMLElement>(deps: DependencyList) => {
  const ref = useRef<T>(null)
  const [height, setHeight] = useState('auto')

  useLayoutEffect(() => {
    if (isNull(ref.current)) {
      return
    }

    setHeight(`${ref.current.scrollHeight}px`)
  }, deps)

  const handleHeightChange = () => {
    setHeight('auto')
  }

  return {
    ref,
    height,
    handleHeightChange,
  }
}

export default useElementHeight
