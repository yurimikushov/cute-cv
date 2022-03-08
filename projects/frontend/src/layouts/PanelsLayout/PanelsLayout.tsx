import { FC } from 'react'
import styled from 'styled-components'
import BaseVersions from './Versions'
import BaseToolbarPanel from './ToolbarPanel'
import { marginTopMixin } from './mixins'
import PanelsLayoutProps from './PanelsLayout.props'

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`

const Versions = styled(BaseVersions)`
  ${marginTopMixin}
`

const ToolbarPanel = styled(BaseToolbarPanel)`
  ${marginTopMixin}
`

const PanelsLayout: FC<PanelsLayoutProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <div>
        <Versions />
      </div>
      <div>{children}</div>
      <div>
        <ToolbarPanel />
      </div>
    </Container>
  )
}

export default PanelsLayout
