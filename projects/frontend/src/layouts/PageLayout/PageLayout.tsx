import { FC } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import PageLayoutPropsT from './PageLayout.props'

const PageLayout: FC<PageLayoutPropsT> = styled.div`
  max-width: 750px;
  min-height: 900px;
  background-color: ${colors.white};
  border-top-width: 4px;
  border-top-style: solid;
  border-color: ${colors.black};
`

export default PageLayout
