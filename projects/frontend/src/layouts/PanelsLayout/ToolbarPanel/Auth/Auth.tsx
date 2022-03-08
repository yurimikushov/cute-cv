import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSignOut, useIsSignedIn, useSignInModal } from 'services/auth'
import { useDownload } from 'services/cv'
import Button from 'components/Button'
import AuthProps from './Auth.props'

const Auth: FC<AuthProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { isSignedIn } = useIsSignedIn()
  const { handleDisplaySignInModal } = useSignInModal()
  const { handleSignOut } = useSignOut()
  const { isDownloading } = useDownload()

  return (
    <Button
      {...props}
      appearance='text'
      withoutPaddings
      disabled={isDownloading}
      onClick={isSignedIn ? handleSignOut : handleDisplaySignInModal}
    >
      {isSignedIn ? t('signOut') : t('signIn')}
    </Button>
  )
}

export default Auth
