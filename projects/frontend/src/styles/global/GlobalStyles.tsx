import { createGlobalStyle } from 'styled-components'
import colors from 'styles/colors'
import gradients from 'styles/gradients'
import focusMixin from 'styles/mixins/focus'

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
