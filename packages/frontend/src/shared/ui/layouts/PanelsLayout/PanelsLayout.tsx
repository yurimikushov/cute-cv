import { FC } from 'react'
import styled, { css } from 'styled-components'
import PanelsLayoutProps from './PanelsLayout.props'

const Container = styled.div`
  display: flex;
  gap: 2.5rem;
`

const panelsMixin = css`
  margin-top: 1.5rem;

  @media print {
    display: none;
  }
`

const LeftSide = styled.div`
  ${panelsMixin}
`

const Main = styled.div``

const RightSide = styled.div`
  ${panelsMixin}
`

const PanelsLayout: FC<PanelsLayoutProps> = ({
  leftSide,
  main,
  rightSide,
  ...props
}) => {
  return (
    <Container {...props}>
      <LeftSide>{leftSide}</LeftSide>
      <Main>{main}</Main>
      <RightSide>{rightSide}</RightSide>
    </Container>
  )
}

export default PanelsLayout
