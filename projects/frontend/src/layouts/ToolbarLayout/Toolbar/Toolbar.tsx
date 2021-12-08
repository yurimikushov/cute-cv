import { FC } from 'react'
import styled from 'styled-components'
import Divider from 'components/Divider'
import colors from 'styles/colors'
import radiuses from 'styles/radiuses'
import Download from './Download'
import Language from './Language'
import Auth from './Auth'
import ToolbarPropsT from './Toolbar.props'

const ToolbarContainer = styled.div`
  margin-top: 1.5rem;
  padding: 0.25rem 0.5rem;
  width: 6rem;
  border-radius: ${radiuses.sm};
  border: 2px solid ${colors.gray200};

  & > * + * {
    margin-top: 0.5rem;
  }
`

const Toolbar: FC<ToolbarPropsT> = (props) => (
  <ToolbarContainer {...props}>
    <Download />
    <Language />
    <Divider />
    <Auth />
  </ToolbarContainer>
)

export default Toolbar
