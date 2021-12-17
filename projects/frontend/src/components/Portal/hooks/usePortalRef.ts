import { useRef } from 'react'
import isNull from 'lodash/isNull'

const usePortalRef = () => {
  const portalRef = useRef<HTMLDivElement | null>(null)

  if (isNull(portalRef.current)) {
    portalRef.current = document.createElement('div')
  }

  return portalRef
}

export default usePortalRef
