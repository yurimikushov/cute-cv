import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useAuth, useIsSignInChecking } from 'services/auth'
import {
  useAutoLoadAllCv,
  useAutoLoadCurrentCv,
  useCleanUpAllCvAfterSignOut,
  useEditable,
  useCurrentCvContent,
  useIsCVLoading,
  ABOUT_ME_MAX_LENGTH,
} from 'services/cv'
import BasePanelsLayout from 'layouts/PanelsLayout'
import PageLayout from 'layouts/PageLayout'
import CVLayout from 'layouts/CVLayout'
import Loader from 'components/ui/Loader'
import Panel from './Panel'
import Header from './Header'
import Avatar from 'components/cv/Avatar'
import AboutMe from 'components/cv/AboutMe'
import Experiences from './Experiences'
import Educations from './Educations'
import Contacts from './Contacts'
import Technologies from './Technologies'
import Languages from './Languages'

const PanelsLayout = styled(BasePanelsLayout)`
  margin-top: 1.25rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
`

const StyledPanel = styled(Panel)`
  padding: 1rem;
`

const StyledCVLayout = styled(({ children, ...props }) => (
  <div {...props}>
    <CVLayout>{children}</CVLayout>
  </div>
))`
  padding: 4rem;
  margin-top: -3rem;
`

const Main = styled.main`
  & > * + * {
    margin-top: 1.5rem;
  }
`

const Aside = styled.aside`
  & > * + * {
    margin-top: 1rem;
  }
`

// eslint-disable-next-line max-statements
const HomePage: FC = () => {
  useAuth()
  useAutoLoadAllCv()
  useAutoLoadCurrentCv()
  useCleanUpAllCvAfterSignOut()

  const { i18n } = useTranslation()
  const { editable } = useEditable()
  const { cv, changeAvatar, deleteAvatar, changeAboutMe } =
    useCurrentCvContent()
  const { isCVLoading } = useIsCVLoading()
  const { isSignInChecking } = useIsSignInChecking()

  const { avatar, aboutMe } = cv

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{cv.fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <PanelsLayout>
        <PageLayout>
          <StyledPanel />
          <StyledCVLayout>
            <Header />
            <Avatar
              src={avatar}
              editable={editable}
              onPick={changeAvatar}
              onClear={deleteAvatar}
            />
            <Main>
              <AboutMe
                value={aboutMe}
                editable={editable}
                maxLength={ABOUT_ME_MAX_LENGTH}
                onChange={changeAboutMe}
              />
              <Experiences />
              <Educations />
            </Main>
            <Aside>
              <Contacts />
              <Technologies />
              <Languages />
            </Aside>
          </StyledCVLayout>
        </PageLayout>
      </PanelsLayout>
    </>
  )
}

export default HomePage
