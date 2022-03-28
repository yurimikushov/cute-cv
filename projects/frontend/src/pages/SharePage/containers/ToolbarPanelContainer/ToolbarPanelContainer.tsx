import { FC } from 'react'
import { useDownload } from 'services/share-cv'
import ToolbarPanel from 'components/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = (props) => {
  const { isDownloading, downloadPDF } = useDownload()

  return (
    <ToolbarPanel
      {...props}
      disabled={isDownloading}
      editable={false}
      disableAuth
      onDownloadPDF={downloadPDF}
    />
  )
}

export default ToolbarPanelContainer
