import { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useAuth, useIsSignInChecking } from 'services/auth'
import {
  useAutoLoadAllCv,
  useAutoLoadCurrentCv,
  useCleanUpAllCvAfterSignOut,
  useCurrentCvFullName,
  useIsCVLoading,
} from 'services/edit-cv'
import PanelsLayout from 'layouts/PanelsLayout'
import PageLayout from 'layouts/PageLayout'
import Loader from 'components/ui/Loader'
import VersionsPanelContainer from './containers/VersionsPanelContainer'
import ToolbarPanelContainer from './containers/ToolbarPanelContainer'
import CvContainer from './containers/CvContainer'
import BaseToolPanelContainer from './containers/ToolPanelContainer'
import SaveCvOfUnsignedInUserContainer from './containers/SaveCvOfUnsignedInUserContainer'

const Container = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 3.5rem;
  display: flex;
  justify-content: center;
`

const ToolPanelContainer = styled(BaseToolPanelContainer)`
  padding: 1rem;
`

// Wrapper needed to correctly download pdf
const CvWrapper = styled.div`
  padding: 4rem;
  margin-top: -3rem;
`

// eslint-disable-next-line max-statements
const HomePage: FC = () => {
  useAuth()
  useAutoLoadAllCv()
  useAutoLoadCurrentCv()
  useCleanUpAllCvAfterSignOut()

  const { i18n } = useTranslation()
  const { fullName } = useCurrentCvFullName()
  const { isCVLoading } = useIsCVLoading()
  const { isSignInChecking } = useIsSignInChecking()

  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{fullName || 'Cute CV'} </title>
      </Helmet>
      {(isSignInChecking || isCVLoading) && <Loader.FullScreen />}
      <Container>
        <PanelsLayout
          leftSide={<VersionsPanelContainer />}
          main={
            <PageLayout>
              <ToolPanelContainer />
              <CvWrapper>
                <CvContainer />
              </CvWrapper>
            </PageLayout>
          }
          rightSide={<ToolbarPanelContainer />}
        />
      </Container>
      <SaveCvOfUnsignedInUserContainer />
    </>
  )
}

export default HomePage
