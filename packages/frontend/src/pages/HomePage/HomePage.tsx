import { VFC } from 'react'
import styled from 'styled-components'
import { ReatomProvider } from 'shared/reatom'
import PanelsLayout from 'shared/ui/layouts/PanelsLayout'
import PageLayout from 'shared/ui/layouts/PageLayout'
import InitContainer from './containers/InitContainer'
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

const HomePage: VFC = () => {
  return (
    <ReatomProvider>
      <InitContainer />
      <HeadContainer />
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
    </ReatomProvider>
  )
}

export default HomePage
