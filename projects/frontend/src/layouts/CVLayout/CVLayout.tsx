import { FC } from 'react'
import styled from 'styled-components'
import { CV_CONTAINER_ID } from 'services/cv'
import CVLayoutPropsT from './CVLayout.props'

const CVLayout: FC<CVLayoutPropsT> = styled.div.attrs({
  id: CV_CONTAINER_ID,
})`
  padding-bottom: 0.75rem; /* to print correctly out of bounds text */
  display: grid;
  grid-template-columns: minmax(auto, 455px) 155px;
  grid-template-rows: auto 1fr;
  gap: 40px 50px;
`

export default CVLayout
