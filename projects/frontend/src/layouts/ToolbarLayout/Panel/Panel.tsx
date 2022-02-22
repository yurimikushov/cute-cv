import styled from 'styled-components'
import Card from 'components/Card'

const Panel = styled(Card)`
  padding: 0.5rem;
  min-width: 6rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`

Panel.displayName = 'Panel'

export default Panel
