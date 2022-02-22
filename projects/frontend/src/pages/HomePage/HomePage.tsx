import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useAuth, useIsSignInChecking } from 'services/auth'
import { useLoadAllCV, useCurrentCvContent, useIsCVLoading } from 'services/cv'
import BasePanelsLayout from 'layouts/PanelsLayout'
import PageLayout from 'layouts/PageLayout'
import CVLayout from 'layouts/CVLayout'
import Loader from 'components/Loader'
import SignIn from './SignIn'
import Panel from './Panel'
import Header from './Header'
import Avatar from './Avatar'
import AboutMe from './AboutMe'
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

const HomePage: FC = () => {
  useAuth()
  useLoadAllCV()

  const { i18n } = useTranslation()
  const { cv } = useCurrentCvContent()
  const { isCVLoading } = useIsCVLoading()
  const { isSignInChecking } = useIsSignInChecking()

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{cv.fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <SignIn />
      <PanelsLayout>
        <PageLayout>
          <StyledPanel />
          <StyledCVLayout>
            <Header />
            <Avatar />
            <Main>
              <AboutMe />
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
