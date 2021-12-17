import { RefObject, useEffect } from 'react'
import 'wicg-inert'
import forEach from 'lodash/forEach'
import getSiblings from 'lib/getSiblings'

const useInertSiblings = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  useEffect(() => {
    const siblings = getSiblings(elementRef.current)

    forEach(siblings, (sibling) => {
      sibling.inert = true
    })

    return () => {
      forEach(siblings, (sibling) => {
        sibling.inert = false
      })
    }
  }, [])
}

export default useInertSiblings
