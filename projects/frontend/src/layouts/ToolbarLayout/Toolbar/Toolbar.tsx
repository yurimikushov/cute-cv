import { FC } from 'react'
import styled from 'styled-components'
import Divider from 'components/Divider'
import Panel from '../Panel'
import Download from './Download'
import Language from './Language'
import Auth from './Auth'
import ToolbarPropsT from './Toolbar.props'

const Container = styled(Panel)`
  margin-top: 1.5rem;
`

const Toolbar: FC<ToolbarPropsT> = (props) => (
  <Container {...props}>
    <Download />
    <Language />
    <Divider />
    <Auth />
  </Container>
)

export default Toolbar
