import { FC } from 'react'
import styled, { css } from 'styled-components'
import PanelsLayoutProps from './PanelsLayout.props'

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`

const marginTopMixin = css`
  margin-top: 1.5rem;
`

const LeftSide = styled.div`
  ${marginTopMixin}
`

const Middle = styled.div``

const RightSide = styled.div`
  ${marginTopMixin}
`

const PanelsLayout: FC<PanelsLayoutProps> = ({
  leftSide,
  middle,
  rightSide,
  ...props
}) => {
  return (
    <Container {...props}>
      <LeftSide>{leftSide}</LeftSide>
      <Middle>{middle}</Middle>
      <RightSide>{rightSide}</RightSide>
    </Container>
  )
}

export default PanelsLayout
