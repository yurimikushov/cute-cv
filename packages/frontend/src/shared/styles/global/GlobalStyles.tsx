import { createGlobalStyle } from 'styled-components'
import colors from 'shared/styles/colors'
import gradients from 'shared/styles/gradients'
import radiuses from 'shared/styles/radiuses'
import focusMixin from 'shared/styles/mixins/focus'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }

  body {
    background-color: ${colors.silver};
    background-image: ${gradients.silver};
    background-attachment: fixed;
  }

  a {
    ${focusMixin}

    color: ${colors.gray300};
    border-radius: ${radiuses.sm};

    &:hover {
      color: ${colors.black};
    }
  }

  ul,
  ol {
    padding-left: 1.25rem;
    list-style: auto;
  }
`

export default GlobalStyles
