import { FC } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import radiuses from 'styles/radiuses'
import PageLayoutPropsT from './PageLayout.props'

const PageLayout: FC<PageLayoutPropsT> = styled.div`
  max-width: 765px;
  min-height: 900px;
  background-color: ${colors.white};
  border-radius: ${radiuses.sm};
  border-top: 4px solid ${colors.black};
`

export default PageLayout
