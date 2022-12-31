import { FC } from 'react'
import { useDownloadPDF, CV_CONTAINER_ID } from 'services/download-cv'
import { useSharableCv } from 'services/share-cv'
import { copyCvLink } from 'services/copy-cv-link'
import ToolbarPanel from 'shared/ui/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = ({
  id,
  ...props
}) => {
  const { data: cv } = useSharableCv(id)
  const { isDownloading, downloadPDF } = useDownloadPDF()

  const handleDownloadPDF = async () => {
    if (!cv) {
      throw new Error(`CV should be defined to download it`)
    }

    const { content } = cv
    const { fullName } = content

    await downloadPDF({
      selector: `#${CV_CONTAINER_ID}`,
      name: fullName,
    })
  }

  return (
    <ToolbarPanel
      {...props}
      disabled={isDownloading}
      editable={false}
      allowShare
      disableAuth
      onDownloadPDF={handleDownloadPDF}
      onCopySharableLink={() => copyCvLink(id)}
    />
  )
}

export default ToolbarPanelContainer
