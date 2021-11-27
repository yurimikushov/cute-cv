import { FC } from 'react'
import styled from 'styled-components'
import Divider from 'components/Divider'
import Download from './Download'
import Language from './Language'
import SignOut from './SignOut'
import ToolbarPropsT from './Toolbar.props'

const ToolbarContainer = styled.div`
  margin-top: 1.5rem;
  padding: 0.25rem 0.5rem;
  width: 6rem;
  border-radius: 3px;
  border: 2px solid #adadad;

  & > * + * {
    margin-top: 0.5rem;
  }
`

const Toolbar: FC<ToolbarPropsT> = (props) => (
  <ToolbarContainer {...props}>
    <Download />
    <Language />
    <Divider />
    <SignOut />
  </ToolbarContainer>
)

export default Toolbar
