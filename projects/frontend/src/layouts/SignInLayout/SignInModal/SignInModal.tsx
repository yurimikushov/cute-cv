import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import Modal from 'components/Modal'
import { ReactComponent as GoogleIcon } from 'icons/google.svg'
import { ReactComponent as FacebookIcon } from 'icons/facebook.svg'
import { ReactComponent as GitHubIcon } from 'icons/github.svg'
import SignInButton from './SignInButton'
import SignInModalPropsT from './SignInModal.props'

const SignInModal: FC<SignInModalPropsT> = ({ className }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'signIn' })

  const handleSignInGoogle = () => {
    console.log('Sign in Google')
  }

  const handleSignInFacebook = () => {
    console.log('Sign in Facebook')
  }

  const handleSignInGitHub = () => {
    console.log('Sign in GitHub')
  }

  return (
    <Modal
      className={cn(
        className,
        'py-20 px-24',
        'flex flex-col justify-center items-center',
        'rounded-md'
      )}
    >
      <h1 className='block text-2xl text-black'>{t('greeting')}</h1>
      <div className='mt-14 flex flex-col gap-3'>
        <SignInButton icon={<GoogleIcon />} onClick={handleSignInGoogle}>
          {t('google.title')}
        </SignInButton>
        <SignInButton icon={<FacebookIcon />} onClick={handleSignInFacebook}>
          {t('facebook.title')}
        </SignInButton>
        <SignInButton icon={<GitHubIcon />} onClick={handleSignInGitHub}>
          {t('github.title')}
        </SignInButton>
      </div>
    </Modal>
  )
}
export default SignInModal
