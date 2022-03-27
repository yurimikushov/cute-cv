type ToolbarPanelProps = {
  className?: string
  disabled: boolean
  editable: boolean
  isSignInChecking: boolean
  isSignedIn: boolean
  onToggleEditable: () => void
  onDownloadPDF: () => Promise<void>
  onDownloadJSON: () => Promise<void>
  onSignInGoogle: () => Promise<void>
  onSignInFacebook: () => Promise<void>
  onSignInGitHub: () => Promise<void>
  onSighOut: () => Promise<void>
  onSkipSighIn: () => void
}

export default ToolbarPanelProps
