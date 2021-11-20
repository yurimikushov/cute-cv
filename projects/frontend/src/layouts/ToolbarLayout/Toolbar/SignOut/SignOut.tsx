import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSignOut } from 'services/auth'
import Button from 'components/Button'
import SignOutPropsT from './SignOut.props'

const SignOut: FC<SignOutPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { handleSignOut } = useSignOut()

  return (
    <div className={className}>
      <Button withPaddings={false} onClick={handleSignOut}>
        {t('signOut')}
      </Button>
    </div>
  )
}

export default SignOut