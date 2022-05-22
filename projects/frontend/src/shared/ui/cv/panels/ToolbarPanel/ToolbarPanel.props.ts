type ToolbarPanelProps = {
  className?: string
  disabled: boolean
  onDownloadPDF: () => Promise<void>
  onDownloadJSON?: () => Promise<void>
} & (
  | {
      editable: boolean
      onToggleEditable: () => void
    }
  | {
      editable?: false
      onToggleEditable?: never
    }
) &
  (
    | {
        allowShare?: boolean
        onCopySharableLink: () => void
      }
    | {
        allowShare: false
        onCopySharableLink?: never
      }
  ) &
  (
    | {
        disableAuth?: boolean
        isSignInChecking: boolean
        isSignedIn: boolean
        onSignInGoogle: () => Promise<void>
        onSignInFacebook: () => Promise<void>
        onSignInGitHub: () => Promise<void>
        onSighOut: () => Promise<void>
        onSkipSighIn: () => void
      }
    | {
        disableAuth: true
        isSignInChecking?: never
        isSignedIn?: never
        onSignInGoogle?: never
        onSignInFacebook?: never
        onSignInGitHub?: never
        onSighOut?: never
        onSkipSighIn?: never
      }
  )

export default ToolbarPanelProps
