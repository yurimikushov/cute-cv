import { useEffect, useRef } from 'react'
import 'wicg-inert'
import isNull from 'lodash/isNull'
import forEach from 'lodash/forEach'
import getSiblings from 'lib/getSiblings'

const useInertSiblings = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const { current: currentElement } = elementRef

    if (isNull(currentElement)) {
      return
    }

    currentElement.inert = false

    const siblings = getSiblings(currentElement)

    forEach(siblings, (sibling) => {
      sibling.inert = true
    })

    return () => {
      forEach(siblings, (sibling) => {
        sibling.inert = false
      })
    }
  }, [elementRef.current])

  return {
    elementRef,
  }
}

export default useInertSiblings
