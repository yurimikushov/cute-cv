type SignInModalProps = {
  className?: string
  onSignInGoogle: () => Promise<void>
  onSignInFacebook: () => Promise<void>
  onSignInGitHub: () => Promise<void>
  onSkip: () => void
}

export default SignInModalProps
