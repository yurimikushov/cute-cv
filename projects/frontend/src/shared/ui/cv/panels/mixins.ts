import { css } from 'styled-components'

const panelMixin = css`
  position: sticky;
  top: 2.75rem;

  min-width: 6rem;

  & > * + * {
    margin-top: 0.5rem;
  }
`

export { panelMixin }
