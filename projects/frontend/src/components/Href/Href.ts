import styled from 'styled-components'
import colors from 'styles/colors'

const Href = styled.a.attrs({
  rel: 'noreferrer',
  target: '_blank',
})`
  display: block;
  color: ${colors.gray300};

  &:hover {
    color: ${colors.black};
  }
`

export default Href
