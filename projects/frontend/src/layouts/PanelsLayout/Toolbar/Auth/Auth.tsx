import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSignOut, useIsSignedIn, useSignInModal } from 'services/auth'
import { useDownload } from 'services/cv'
import Button from 'components/Button'
import AuthPropsT from './Auth.props'

const Auth: FC<AuthPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { isSignedIn } = useIsSignedIn()
  const { handleDisplaySignInModal } = useSignInModal()
  const { handleSignOut } = useSignOut()
  const { isDownloading } = useDownload()

  return (
    <div {...props}>
      {isSignedIn ? (
        <Button
          appearance='text'
          withoutPaddings
          disabled={isDownloading}
          onClick={handleSignOut}
        >
          {t('signOut')}
        </Button>
      ) : (
        <Button
          appearance='text'
          withoutPaddings
          disabled={isDownloading}
          onClick={handleDisplaySignInModal}
        >
          {t('signIn')}
        </Button>
      )}
    </div>
  )
}

export default Auth
