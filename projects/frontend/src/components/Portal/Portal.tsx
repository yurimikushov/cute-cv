import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import isNull from 'lodash/isNull'
import nonNullable from 'lib/nonNullable'
import PortalPropsT from './Portal.props'

const portalContainer = document.querySelector('.app') as HTMLDivElement

const Portal: ForwardRefRenderFunction<HTMLDivElement, PortalPropsT> = (
  { children },
  externalRef
) => {
  const portalRef = useRef<HTMLDivElement | null>(null)

  useImperativeHandle(externalRef, () => portalRef.current as HTMLDivElement)

  if (isNull(portalRef.current)) {
    portalRef.current = document.createElement('div')
  }

  useLayoutEffect(() => {
    portalContainer.appendChild(nonNullable(portalRef.current))

    return () => {
      portalContainer.removeChild(nonNullable(portalRef.current))
    }
  }, [portalRef.current])

  return createPortal(children, portalRef.current)
}

export default forwardRef(Portal)
