import { FC } from 'react'
import { useAuth } from 'services/auth'
import {
  useEditable,
  useGetCurrentCvFullName,
  useCurrentCvMetadata,
} from 'services/edit-cv'
import { useCopyCvLink } from 'services/copy-cv-link'
import { CV_CONTAINER_ID, useDownloadPDF } from 'services/download-cv'
import ToolbarPanel from 'shared/ui/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = (props) => {
  const { editable, toggleEditable } = useEditable()
  const { isDownloading, downloadPDF } = useDownloadPDF()
  const getCurrentCvFullName = useGetCurrentCvFullName()
  const { id, allowShare } = useCurrentCvMetadata()
  const { copyCvLink } = useCopyCvLink(id)
  const { isSignInChecking, isSignedIn, signIn, signOut, skipSignIn } =
    useAuth()

  const handleDownloadPDF = async () => {
    await downloadPDF({
      selector: `#${CV_CONTAINER_ID}`,
      name: getCurrentCvFullName(),
    })
  }

  return (
    <ToolbarPanel
      {...props}
      disabled={isDownloading}
      editable={editable}
      allowShare={allowShare}
      isSignInChecking={isSignInChecking}
      isSignedIn={isSignedIn}
      onToggleEditable={toggleEditable}
      onDownloadPDF={handleDownloadPDF}
      onCopySharableLink={copyCvLink}
      onSignInGoogle={() => signIn('Google')}
      onSignInGitHub={() => signIn('GitHub')}
      onSignInFacebook={() => signIn('Facebook')}
      onSighOut={signOut}
      onSkipSighIn={skipSignIn}
    />
  )
}

export default ToolbarPanelContainer
