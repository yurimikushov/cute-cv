import { FC } from 'react'
import styled from 'styled-components'
import BaseVersions from './Versions'
import BaseToolbar from './Toolbar'
import { marginTopMixin } from './mixins'
import ToolbarLayoutPropsT from './ToolbarLayout.props'

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`

const Versions = styled(BaseVersions)`
  ${marginTopMixin}
`

const Toolbar = styled(BaseToolbar)`
  ${marginTopMixin}
`

const ToolbarLayout: FC<ToolbarLayoutPropsT> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <div>
        <Versions />
      </div>
      <div>{children}</div>
      <div>
        <Toolbar />
      </div>
    </Container>
  )
}

export default ToolbarLayout
