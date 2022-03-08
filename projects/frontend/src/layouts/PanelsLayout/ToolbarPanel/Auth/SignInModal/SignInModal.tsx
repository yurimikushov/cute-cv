import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  useSignInGitHub,
  useSignInFacebook,
  useSignInGoogle,
} from 'services/auth'
import Modal from 'components/Modal'
import Button from 'components/Button'
import { ReactComponent as GoogleIcon } from 'icons/google.svg'
import { ReactComponent as FacebookIcon } from 'icons/facebook.svg'
import { ReactComponent as GitHubIcon } from 'icons/github.svg'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import SignInButton from './SignInButton'
import SignInModalProps from './SignInModal.props'

const Container = styled(Modal)`
  padding: 5rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${radiuses.md};
`

const Title = styled.h1`
  font-size: ${fonts.size['2xl']};
  color: ${colors.black};
`

const SignInOptions = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const Skip = styled.div`
  margin-top: 2rem;
`

const SignInModal: FC<SignInModalProps> = ({ onSkip, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'signIn' })
  const { handleSignInGoogle } = useSignInGoogle()
  const { handleSignInFacebook } = useSignInFacebook()
  const { handleSignInGitHub } = useSignInGitHub()

  return (
    <Container {...props}>
      <Title>{t('greeting')}</Title>
      <SignInOptions>
        <SignInButton icon={<GoogleIcon />} onClick={handleSignInGoogle}>
          {t('google.title')}
        </SignInButton>
        {/* Should enable Facebook auth on Firebase Console */}
        {false && (
          <SignInButton icon={<FacebookIcon />} onClick={handleSignInFacebook}>
            {t('facebook.title')}
          </SignInButton>
        )}
        <SignInButton icon={<GitHubIcon />} onClick={handleSignInGitHub}>
          {t('github.title')}
        </SignInButton>
      </SignInOptions>
      <Skip>
        <Button appearance='text' withoutPaddings onClick={onSkip}>
          {t('skip.title')}
        </Button>
        &#44;&nbsp;
        <span>{t('skip.description')}</span>
      </Skip>
    </Container>
  )
}
export default SignInModal
