import { FC } from 'react'
import styled from 'styled-components'
import Card from 'components/ui/Card'
import Divider from 'components/ui/Divider'
import { panelMixin } from '../mixins'
import Download from './Download'
import Share from './Share'
import Language from './Language'
import Auth from './Auth'
import ToolbarPanelContext from './ToolbarPanelContext'
import ToolbarPanelProps from './ToolbarPanel.props'

const Container = styled(Card)`
  ${panelMixin}
`

const ToolbarPanel: FC<ToolbarPanelProps> = ({ className, ...props }) => (
  <ToolbarPanelContext.Provider value={props}>
    <Container className={className}>
      <Download />
      {props.allowShare && <Share />}
      <Language />
      {!props.disableAuth && (
        <>
          <Divider />
          <Auth />
        </>
      )}
    </Container>
  </ToolbarPanelContext.Provider>
)

export default ToolbarPanel
