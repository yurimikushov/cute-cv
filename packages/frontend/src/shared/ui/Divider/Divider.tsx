import styled from 'styled-components'
import colors from 'shared/styles/colors'

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray100};
`

Divider.displayName = 'Divider'

export default Divider
