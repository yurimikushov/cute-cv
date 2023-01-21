import { FC } from 'react'
import { useAuth } from 'services/auth'
import {
  useEditable,
  useCurrentCvFullName,
  useCurrentCvMetadata,
} from 'services/edit-cv'
import { copyCvLink } from 'services/copy-cv-link'
import { CV_CONTAINER_ID, useDownloadPDF } from 'services/download-cv'
import ToolbarPanel from 'shared/ui/cv/panels/ToolbarPanel'
import ToolbarPanelContainerProps from './ToolbarPanelContainer.props'

const ToolbarPanelContainer: FC<ToolbarPanelContainerProps> = (props) => {
  const { editable, toggleEditable } = useEditable()
  const { isDownloading, downloadPDF } = useDownloadPDF()
  const {fullName} = useCurrentCvFullName()
  const { metadata: { id, allowShare } = { id: '', allowShare: false } } =
    useCurrentCvMetadata()
  const { isSignInChecking, isSignedIn, signIn, signOut, skipSignIn } =
    useAuth()

  const handleDownloadPDF = async () => {
    await downloadPDF({
      selector: `#${CV_CONTAINER_ID}`,
      name: fullName ?? '',
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
      onCopySharableLink={() => copyCvLink(id)}
      onSignInGoogle={() => signIn('Google')}
      onSignInGitHub={() => signIn('GitHub')}
      onSignInFacebook={() => signIn('Facebook')}
      onSighOut={signOut}
      onSkipSighIn={skipSignIn}
    />
  )
}

export default ToolbarPanelContainer
