import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  useSignInGitHub,
  useSignInFacebook,
  useSignInGoogle,
} from 'services/auth'
import Modal from 'components/Modal'
import { ReactComponent as GoogleIcon } from 'icons/google.svg'
import { ReactComponent as FacebookIcon } from 'icons/facebook.svg'
import { ReactComponent as GitHubIcon } from 'icons/github.svg'
import SignInButton from './SignInButton'
import SignInModalPropsT from './SignInModal.props'

const StyledModal = styled(Modal)`
  padding: 5rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #000;
`

const Container = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const SignInModal: FC<SignInModalPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'signIn' })
  const { handleSignInGoogle } = useSignInGoogle()
  const { handleSignInFacebook } = useSignInFacebook()
  const { handleSignInGitHub } = useSignInGitHub()

  return (
    <StyledModal {...props}>
      <Title>{t('greeting')}</Title>
      <Container>
        <SignInButton icon={<GoogleIcon />} onClick={handleSignInGoogle}>
          {t('google.title')}
        </SignInButton>
        <SignInButton icon={<FacebookIcon />} onClick={handleSignInFacebook}>
          {t('facebook.title')}
        </SignInButton>
        <SignInButton icon={<GitHubIcon />} onClick={handleSignInGitHub}>
          {t('github.title')}
        </SignInButton>
      </Container>
    </StyledModal>
  )
}
export default SignInModal
