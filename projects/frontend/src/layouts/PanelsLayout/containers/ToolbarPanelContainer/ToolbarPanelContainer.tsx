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
import { useDownload, useEditable } from 'services/edit-cv'
import ToolbarPanel from 'components/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = (props) => {
  const { editable, toggleEditable } = useEditable()
  const { isDownloading, handleDownloadPDF, handleDownloadJSON } = useDownload()
  const { isSignInChecking } = useIsSignInChecking()
  const { isSignedIn } = useIsSignedIn()
  const { handleSignInGoogle } = useSignInGoogle()
  const { handleSignInFacebook } = useSignInFacebook()
  const { handleSignInGitHub } = useSignInGitHub()
  const { handleSignOut } = useSignOut()
  const { handleSkipSignIn } = useSkipSignIn()

  return (
    <ToolbarPanel
      {...props}
      disabled={isDownloading}
      editable={editable}
      isSignInChecking={isSignInChecking}
      isSignedIn={isSignedIn}
      onToggleEditable={toggleEditable}
      onDownloadPDF={handleDownloadPDF}
      onDownloadJSON={handleDownloadJSON}
      onSignInGoogle={handleSignInGoogle}
      onSignInFacebook={handleSignInFacebook}
      onSignInGitHub={handleSignInGitHub}
      onSighOut={handleSignOut}
      onSkipSighIn={handleSkipSignIn}
    />
  )
}

export default ToolbarPanelContainer
