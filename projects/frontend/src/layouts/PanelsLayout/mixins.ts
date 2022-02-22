import { css } from 'styled-components'

const panelMixin = css`
  min-width: 6rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`

const marginTopMixin = css`
  margin-top: 1.5rem;
`

export { panelMixin, marginTopMixin }
