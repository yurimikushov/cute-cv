import { FC } from 'react'
import {
  useIsSignInChecking,
  useIsSignedIn,
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
  useSkipSignIn,
} from 'services/auth'
import {
  useEditable,
  useGetCurrentCvFullName,
  useCurrentCvMetadata,
} from 'services/edit-cv'
import { useCopyCvLink } from 'services/copy-cv-link'
import { CV_CONTAINER_ID, useDownloadPDF } from 'services/download-cv'
import ToolbarPanel from 'shared/ui/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

// eslint-disable-next-line max-statements
const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = (props) => {
  const { editable, toggleEditable } = useEditable()
  const { isDownloading, downloadPDF } = useDownloadPDF()
  const getCurrentCvFullName = useGetCurrentCvFullName()
  const { id, allowShare } = useCurrentCvMetadata()
  const { copyCvLink } = useCopyCvLink(id)
  const { isSignInChecking } = useIsSignInChecking()
  const { isSignedIn } = useIsSignedIn()
  const { handleSignInGoogle } = useSignInGoogle()
  const { handleSignInFacebook } = useSignInFacebook()
  const { handleSignInGitHub } = useSignInGitHub()
  const { handleSignOut } = useSignOut()
  const { handleSkipSignIn } = useSkipSignIn()

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
      onSignInGoogle={handleSignInGoogle}
      onSignInFacebook={handleSignInFacebook}
      onSignInGitHub={handleSignInGitHub}
      onSighOut={handleSignOut}
      onSkipSighIn={handleSkipSignIn}
    />
  )
}

export default ToolbarPanelContainer
