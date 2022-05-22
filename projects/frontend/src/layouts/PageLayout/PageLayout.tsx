import { FC } from 'react'
import styled from 'styled-components'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import PageLayoutProps from './PageLayout.props'

const PageLayout: FC<PageLayoutProps> = styled.div`
  width: 765px;
  min-height: 900px;
  background-color: ${colors.white};
  border-radius: ${radiuses.sm};
  border-top: 4px solid ${colors.black};
`

export default PageLayout
