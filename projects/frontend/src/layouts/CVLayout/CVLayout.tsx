import { FC } from 'react'
import styled from 'styled-components'
import { CV_CONTAINER_ID } from 'services/cv'
import CVLayoutPropsT from './CVLayout.props'

const CVLayout: FC<CVLayoutPropsT> = styled.div.attrs({
  id: CV_CONTAINER_ID,
})`
  display: grid;
  grid-template-columns: minmax(auto, 485px) 150px;
  grid-template-rows: auto 1fr;
  gap: 2.5rem;
`

export default CVLayout
