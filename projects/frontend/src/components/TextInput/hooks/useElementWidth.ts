import { DependencyList, useLayoutEffect, useRef, useState } from 'react'
import isNull from 'lodash/isNull'

type Options = {
  extraSpace?: number
}

const useElementWidth = <T extends HTMLElement>(
  deps: DependencyList,
  // eslint-disable-next-line no-magic-numbers
  { extraSpace = 0 }: Options
) => {
  const ref = useRef<T>(null)
  const [width, setWidth] = useState('auto')

  useLayoutEffect(() => {
    if (isNull(ref.current)) {
      return
    }

    setWidth(`${ref.current.scrollWidth + extraSpace}px`)
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
