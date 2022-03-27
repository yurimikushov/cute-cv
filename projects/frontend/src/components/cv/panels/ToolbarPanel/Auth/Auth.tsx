import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import nonNullable from 'lib/nonNullable'
import useEffectWhen from 'hooks/useEffectWhen'
import Button from 'components/ui/Button'
import SignInModal from 'components/auth/modals/SignInModal'
import { useToolbarPanel } from '../ToolbarPanelContext'
import useSignInModal from './hooks/useSignInModal'
import AuthProps from './Auth.props'

const Auth: FC<AuthProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const {
    disableAuth = false,
    disabled,
    isSignInChecking,
    isSignedIn,
    onSignInGoogle,
    onSignInFacebook,
    onSignInGitHub,
    onSighOut,
    onSkipSighIn,
  } = useToolbarPanel()

  if (disableAuth) {
    throw new Error('[ToolbarPanel] Auth is disabled but you try to render it')
  }

  const { isSignInModalOpened, handleOpenSignInModal, handleSkipSignInModal } =
    useSignInModal(nonNullable(onSkipSighIn))

  useEffectWhen(handleOpenSignInModal, !isSignInChecking && !isSignedIn)

  return (
    <>
      <Button
        {...props}
        appearance='text'
        withoutPaddings
        disabled={isSignInChecking || disabled}
        onClick={isSignedIn ? onSighOut : handleOpenSignInModal}
      >
        {isSignedIn ? t('signOut') : t('signIn')}
      </Button>
      {isSignInModalOpened && (
        <SignInModal
          onSignInGoogle={nonNullable(onSignInGoogle)}
          onSignInFacebook={nonNullable(onSignInFacebook)}
          onSignInGitHub={nonNullable(onSignInGitHub)}
          onSkip={handleSkipSignInModal}
        />
      )}
    </>
  )
}

export default Auth
