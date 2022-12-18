import { useEffect, useRef } from 'react'
import 'wicg-inert'
import forEach from 'lodash/forEach'
import getSiblings from 'shared/lib/getSiblings'

const useInertSiblings = <T extends HTMLElement>(inert = true) => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    if (!inert) {
      return
    }

    const { current: currentElement } = elementRef

    if (!currentElement) {
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
  }, [inert, elementRef.current])

  return {
    elementRef,
  }
}

export default useInertSiblings
