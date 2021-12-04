import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSignOut, useSkipSignIn, useSignInModal } from 'services/auth'
import Button from 'components/Button'
import SignOutPropsT from './SignOut.props'

const SignOut: FC<SignOutPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { isSignInSkipped } = useSkipSignIn()
  const { handleDisplaySignInModal } = useSignInModal()
  const { handleSignOut } = useSignOut()

  return (
    <div {...props}>
      {isSignInSkipped ? (
        <Button withPaddings={false} onClick={handleDisplaySignInModal}>
          {t('signIn')}
        </Button>
      ) : (
        <Button withPaddings={false} onClick={handleSignOut}>
          {t('signOut')}
        </Button>
      )}
    </div>
  )
}

export default SignOut
