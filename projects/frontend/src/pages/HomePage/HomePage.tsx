import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useAuth, useIsSignInChecking } from 'services/auth'
import {
  useAutoLoadAllCv,
  useAutoLoadCurrentCv,
  useCleanUpAllCvAfterSignOut,
  useCurrentCvContent,
  useIsCVLoading,
} from 'services/edit-cv'
import PanelsLayout from 'layouts/PanelsLayout'
import PageLayout from 'layouts/PageLayout'
import Loader from 'components/ui/Loader'
import CurrentCv from '../common/CurrentCv'
import BaseToolPanel from './ToolPanel'

const Container = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
`

const ToolPanel = styled(BaseToolPanel)`
  padding: 1rem;
`

const CurrentCvWrapper = styled.div`
  padding: 4rem;
  margin-top: -3rem;
`

const HomePage: FC = () => {
  useAuth()
  useAutoLoadAllCv()
  useAutoLoadCurrentCv()
  useCleanUpAllCvAfterSignOut()

  const { i18n } = useTranslation()
  const { cv } = useCurrentCvContent()
  const { isCVLoading } = useIsCVLoading()
  const { isSignInChecking } = useIsSignInChecking()

  const { fullName } = cv

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <Container>
        <PanelsLayout>
          <PageLayout>
            <ToolPanel />
            <CurrentCvWrapper>
              <CurrentCv />
            </CurrentCvWrapper>
          </PageLayout>
        </PanelsLayout>
      </Container>
    </>
  )
}

export default HomePage
