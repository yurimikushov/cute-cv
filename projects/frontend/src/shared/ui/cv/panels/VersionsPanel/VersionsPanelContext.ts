import { createContext, useContext } from 'react'
import isNull from 'lodash/isNull'
import VersionsPanelProps from './VersionsPanel.props'

const VersionsPanelContext = createContext<VersionsPanelProps | null>(null)

const useVersionsPanel = () => {
  const context = useContext(VersionsPanelContext)

  if (isNull(context)) {
    throw new Error('[VersionsPanel] Context initialization is missed ')
  }

  return context
}

export default VersionsPanelContext
export { useVersionsPanel }
