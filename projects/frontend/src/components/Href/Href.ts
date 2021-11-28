import styled from 'styled-components'

const Href = styled.a.attrs({
  rel: 'noreferrer',
  target: '_blank',
})`
  display: block;
  color: #73808d;

  &:hover {
    color: #000;
  }
`

export default Href
