import { FC, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import isNull from 'lodash/isNull'
import nonNullable from 'lib/nonNullable'
import PortalPropsT from './Portal.props'

const portalRefContainer = document.querySelector('.app') as HTMLDivElement

const Portal: FC<PortalPropsT> = ({ children, ...props }) => {
  const portalRef = useRef<HTMLDivElement | null>(null)

  if (isNull(portalRef.current)) {
    portalRef.current = document.createElement('div')
  }

  useLayoutEffect(() => {
    portalRefContainer.appendChild(nonNullable(portalRef.current))

    return () => {
      portalRefContainer.removeChild(nonNullable(portalRef.current))
    }
  }, [portalRef.current])

  return createPortal(<div {...props}>{children}</div>, portalRef.current)
}

export default Portal
