import { DependencyList, useLayoutEffect, useRef, useState } from 'react'
import isNull from 'lodash/isNull'

const useElementWidth = <T extends HTMLElement>(deps: DependencyList) => {
  const ref = useRef<T>(null)
  const [width, setWidth] = useState('auto')

  useLayoutEffect(() => {
    if (isNull(ref.current)) {
      return
    }

    setWidth(`${ref.current.scrollWidth}px`)
  }, deps)

  const handleWidthChange = () => {
    setWidth('auto')
  }

  return {
    ref,
    width,
    handleWidthChange,
  }
}

export default useElementWidth
