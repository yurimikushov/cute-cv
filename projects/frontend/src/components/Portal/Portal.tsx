import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import isNull from 'lodash/isNull'
import useAppendIntoRoot from './hooks/useAppendIntoRoot'
import PortalPropsT from './Portal.props'

const Portal: ForwardRefRenderFunction<HTMLDivElement, PortalPropsT> = (
  { children },
  externalRef
) => {
  const portalRef = useRef<HTMLDivElement | null>(null)

  useImperativeHandle(externalRef, () => portalRef.current as HTMLDivElement)

  if (isNull(portalRef.current)) {
    portalRef.current = document.createElement('div')
  }

  useAppendIntoRoot(portalRef)

  return createPortal(children, portalRef.current)
}

export default forwardRef(Portal)
