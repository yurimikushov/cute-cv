import { FC } from 'react'
import isUndefined from 'lodash/isUndefined'
import { useDownloadPDF, CV_CONTAINER_ID } from 'services/download-cv'
import { useCopySharableCvLink, useSharableCv } from 'services/share-cv'
import ToolbarPanel from 'components/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = ({
  id,
  ...props
}) => {
  const { data: cv } = useSharableCv(id)
  const { isDownloading, downloadPDF } = useDownloadPDF()
  const { copySharableLink } = useCopySharableCvLink(id)

  const handleDownloadPDF = async () => {
    if (isUndefined(cv)) {
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
      onCopySharableLink={copySharableLink}
    />
  )
}

export default ToolbarPanelContainer
