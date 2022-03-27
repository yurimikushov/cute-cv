import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useEffectWhen from 'hooks/useEffectWhen'
import Button from 'components/ui/Button'
import { useToolbarPanel } from '../ToolbarPanelContext'
import useSignInModal from './hooks/useSignInModal'
import SignInModal from './SignInModal'
import AuthProps from './Auth.props'

const Auth: FC<AuthProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const {
    disabled,
    isSignInChecking,
    isSignedIn,
    onSignInGoogle,
    onSignInFacebook,
    onSignInGitHub,
    onSighOut,
    onSkipSighIn,
  } = useToolbarPanel()

  const { isSignInModalOpened, handleOpenSignInModal, handleSkipSignInModal } =
    useSignInModal(onSkipSighIn)

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
          onSignInGoogle={onSignInGoogle}
          onSignInFacebook={onSignInFacebook}
          onSignInGitHub={onSignInGitHub}
          onSkip={handleSkipSignInModal}
        />
      )}
    </>
  )
}

export default Auth
