import { FC } from 'react'
import styled from 'styled-components'
import PageLayoutPropsT from './PageLayout.props'

const PageLayout: FC<PageLayoutPropsT> = styled.div`
  max-width: 750px;
  min-height: 900px;
  background-color: #fff;
  border-top-width: 4px;
  border-style: solid;
  border-color: #000;
`

export default PageLayout
