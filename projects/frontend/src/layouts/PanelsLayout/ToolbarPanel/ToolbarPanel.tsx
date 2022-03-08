import { FC } from 'react'
import styled from 'styled-components'
import Card from 'components/Card'
import Divider from 'components/Divider'
import { panelMixin } from '../mixins'
import Download from './Download'
import Language from './Language'
import Auth from './Auth'
import ToolbarPanelProps from './ToolbarPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

const ToolbarPanel: FC<ToolbarPanelProps> = (props) => (
  <Container {...props}>
    <Download />
    <Language />
    <Divider />
    <Auth />
  </Container>
)

export default ToolbarPanel
