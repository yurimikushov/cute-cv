import { FC } from 'react'
import styled from 'styled-components'
import { CV_CONTAINER_ID } from 'services/cv'
import CVLayoutPropsT from './CVLayout.props'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 485px) 150px;
  grid-template-rows: auto 1fr;
  gap: 2.5rem;
`

const CVLayout: FC<CVLayoutPropsT> = ({ children, ...props }) => (
  // @ts-expect-error bad typing
  <Wrapper {...props} id={CV_CONTAINER_ID}>
    {children}
  </Wrapper>
)

export default CVLayout
