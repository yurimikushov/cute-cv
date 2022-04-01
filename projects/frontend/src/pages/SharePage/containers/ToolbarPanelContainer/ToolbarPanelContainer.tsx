import { FC } from 'react'
import { useDownload } from 'services/share-cv'
import ToolbarPanel from 'components/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = ({
  id,
  ...props
}) => {
  const { isDownloading, downloadPDF } = useDownload(id)

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
