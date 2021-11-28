import { createGlobalStyle } from 'styled-components'
import colors from 'styles/colors'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }

  body {
    background-color: ${colors.gray50};
  }

  a {
    color: ${colors.gray300};

    &:hover {
      color: ${colors.black};
    }
  }
`

export default GlobalStyles
