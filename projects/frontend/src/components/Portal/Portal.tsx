import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import { createPortal } from 'react-dom'
import nonNullable from 'lib/nonNullable'
import usePortalRef from './hooks/usePortalRef'
import useAppendIntoRoot from './hooks/useAppendIntoRoot'
import PortalPropsT from './Portal.props'

const Portal: ForwardRefRenderFunction<HTMLDivElement, PortalPropsT> = (
  { children },
  externalRef
) => {
  const portalRef = usePortalRef()

  useImperativeHandle(externalRef, () => nonNullable(portalRef.current))

  useAppendIntoRoot(portalRef)

  return createPortal(children, nonNullable(portalRef.current))
}

export default forwardRef(Portal)
