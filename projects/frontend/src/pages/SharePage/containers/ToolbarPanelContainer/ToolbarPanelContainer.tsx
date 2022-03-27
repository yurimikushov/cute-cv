import { FC } from 'react'
import noop from 'lodash/noop'
import ToolbarPanel from 'components/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = (props) => {
  const isDownloading = false
  const handleDownloadPDF = () => new Promise<void>(noop)
  const handleDownloadJSON = () => new Promise<void>(noop)

  return (
    <ToolbarPanel
      {...props}
      disabled={isDownloading}
      editable={false}
      disableAuth
      onDownloadPDF={handleDownloadPDF}
      onDownloadJSON={handleDownloadJSON}
    />
  )
}

export default ToolbarPanelContainer
