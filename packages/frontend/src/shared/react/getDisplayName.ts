import { FunctionComponent } from 'react'

const getDisplayName = <P>(
  Component: FunctionComponent<P>,
  fallbackName = 'Component'
) => {
  return Component.displayName || Component.name || fallbackName
}
export default getDisplayName
