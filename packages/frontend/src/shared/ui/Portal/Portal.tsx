import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useLayoutEffect,
} from 'react'
import { createPortal } from 'react-dom'
import useIsFirstRender from 'shared/hooks/useIsFirstRender'
import PortalProps from './Portal.props'

const Portal: ForwardRefRenderFunction<HTMLDivElement, PortalProps> = (
  { children },
  externalRef
) => {
  const portalRef = useRef(document.createElement('div'))

  useImperativeHandle(externalRef, () => portalRef.current)

  useLayoutEffect(() => {
    document.body.appendChild(portalRef.current)

    return () => {
      document.body.removeChild(portalRef.current)
    }
  }, [portalRef.current])

  return createPortal(children, portalRef.current)
}

export default forwardRef(Portal)
