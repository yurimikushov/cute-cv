import { DependencyList, useLayoutEffect, useRef, useState } from 'react'
import isNull from 'lodash/isNull'

type Options = {
  extraSpace?: number
}

const useRecalcElementWidth = <T extends HTMLElement>(
  deps: DependencyList,
  // eslint-disable-next-line no-magic-numbers
  { extraSpace = 0 }: Options
) => {
  const ref = useRef<T>(null)
  const [width, setWidth] = useState('auto')

  useLayoutEffect(() => {
    setWidth('auto')
  }, deps)

  useLayoutEffect(() => {
    if (isNull(ref.current)) {
      return
    }

    if (width !== 'auto') {
      return
    }

    setWidth(`${ref.current.scrollWidth + extraSpace}px`)
  }, [...deps, width])

  return {
    ref,
    width,
  }
}

export default useRecalcElementWidth
