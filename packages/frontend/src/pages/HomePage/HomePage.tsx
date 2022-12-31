import { FC } from 'react'
import styled from 'styled-components'
import { useAuth, withAuthService } from 'services/auth'
import {
  useAutoLoadAllCv,
  useAutoLoadCurrentCv,
  useCleanUpAllCvAfterSignOut,
  useIsCVLoading,
} from 'services/edit-cv'
import PanelsLayout from 'shared/ui/layouts/PanelsLayout'
import PageLayout from 'shared/ui/layouts/PageLayout'
import Loader from 'shared/ui/Loader'
import HeadContainer from './containers/HeadContainer'
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
  padding: 3rem;
  margin-top: -2rem;

  @media print {
    margin-top: 0;
  }
`

const HomePage: FC = () => {
  useAutoLoadAllCv()
  useAutoLoadCurrentCv()
  useCleanUpAllCvAfterSignOut()

  const { isSignInChecking } = useAuth()
  const { isCVLoading } = useIsCVLoading()

  return (
    <>
      <HeadContainer />
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

export default withAuthService(HomePage)
