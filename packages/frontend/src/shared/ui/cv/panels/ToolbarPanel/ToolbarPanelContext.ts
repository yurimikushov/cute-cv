import { createContext, useContext } from 'react'
import ToolbarPanelProps from './ToolbarPanel.props'

const ToolbarPanelContext = createContext<Omit<
  ToolbarPanelProps,
  'className'
> | null>(null)

const useToolbarPanel = () => {
  const context = useContext(ToolbarPanelContext)

  if (!context) {
    throw new Error('[ToolbarPanel] Context initialization is missed ')
  }

  return context
}

export default ToolbarPanelContext
export { useToolbarPanel }
