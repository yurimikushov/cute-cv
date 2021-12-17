import { RefObject, useLayoutEffect } from 'react'
import nonNullable from 'lib/nonNullable'

const portalContainer = document.querySelector('.app') as HTMLDivElement

const useAppendIntoRoot = <T extends HTMLElement>(portalRef: RefObject<T>) => {
  useLayoutEffect(() => {
    portalContainer.appendChild(nonNullable(portalRef.current))

    return () => {
      portalContainer.removeChild(nonNullable(portalRef.current))
    }
  }, [portalRef.current])
}

export default useAppendIntoRoot
