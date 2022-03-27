import { FC } from 'react'
import styled from 'styled-components'
import BaseVersionsPanel from 'components/cv/panels/VersionsPanel'
import ToolbarPanelContainer from './containers/ToolbarPanelContainer'
import { marginTopMixin } from './mixins'
import PanelsLayoutProps from './PanelsLayout.props'

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`

const VersionsPanel = styled(BaseVersionsPanel)`
  ${marginTopMixin}
`

const ToolbarPanel = styled(ToolbarPanelContainer)`
  ${marginTopMixin}
`

const PanelsLayout: FC<PanelsLayoutProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <div>
        <VersionsPanel />
      </div>
      <div>{children}</div>
      <div>
        <ToolbarPanel />
      </div>
    </Container>
  )
}

export default PanelsLayout
