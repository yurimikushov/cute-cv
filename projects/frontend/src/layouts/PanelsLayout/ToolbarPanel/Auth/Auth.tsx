import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import useEffectWhen from 'hooks/useEffectWhen'
import { useSignOut, useIsSignedIn, useIsSignInChecking } from 'services/auth'
import { useDownload } from 'services/cv'
import Button from 'components/Button'
import useSignInModal from './hooks/useSignInModal'
import SignInModal from './SignInModal'
import AuthProps from './Auth.props'

const Auth: FC<AuthProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { isSignedIn } = useIsSignedIn()
  const { handleSignOut } = useSignOut()
  const { isDownloading } = useDownload()
  const { isSignInChecking } = useIsSignInChecking()

  const { isSignInModalOpened, handleOpenSignInModal, handleSkipSignInModal } =
    useSignInModal()

  useEffectWhen(handleOpenSignInModal, !isSignInChecking && !isSignedIn)

  return (
    <>
      <Button
        {...props}
        appearance='text'
        withoutPaddings
        disabled={isSignInChecking || isDownloading}
        onClick={isSignedIn ? handleSignOut : handleOpenSignInModal}
      >
        {isSignedIn ? t('signOut') : t('signIn')}
      </Button>
      {isSignInModalOpened && <SignInModal onSkip={handleSkipSignInModal} />}
    </>
  )
}

export default Auth
