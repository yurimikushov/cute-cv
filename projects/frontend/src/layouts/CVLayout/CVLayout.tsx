import { FC } from 'react'
import styled from 'styled-components'
import CvLayoutProps from './CvLayout.props'

const Container = styled.div`
  padding-bottom: 0.75rem; /* to print correctly out of bounds text */
  display: grid;
  grid-template-columns: minmax(auto, 455px) 155px;
  grid-template-rows: auto 1fr;
  gap: 40px 50px;
`

const Header = styled.header``

const Avatar = styled.header``

const Main = styled.main`
  & > * + * {
    margin-top: 1.5rem;
  }
`

const Aside = styled.aside`
  & > * + * {
    margin-top: 1rem;
  }
`

const CvLayout: FC<CvLayoutProps> = ({
  header,
  avatar,
  main,
  aside,
  ...props
}) => {
  return (
    <Container {...props}>
      <Header>{header}</Header>
      <Avatar>{avatar}</Avatar>
      <Main>{main}</Main>
      <Aside>{aside}</Aside>
    </Container>
  )
}

export default CvLayout
