import { FC } from 'react'
import { useDownload, useCopySharableCvLink } from 'services/share-cv'
import ToolbarPanel from 'components/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = ({
  id,
  ...props
}) => {
  const { isDownloading, downloadPDF } = useDownload(id)
  const { copySharableLink } = useCopySharableCvLink(id)

  return (
    <ToolbarPanel
      {...props}
      disabled={isDownloading}
      editable={false}
      allowShare
      disableAuth
      onDownloadPDF={downloadPDF}
      onCopySharableLink={copySharableLink}
    />
  )
}

export default ToolbarPanelContainer
