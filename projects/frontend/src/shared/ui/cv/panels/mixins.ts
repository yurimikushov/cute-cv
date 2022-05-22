import { css } from 'styled-components'

const panelMixin = css`
  min-width: 6rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`

export { panelMixin }
