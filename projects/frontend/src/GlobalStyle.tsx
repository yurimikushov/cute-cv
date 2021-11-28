import { createGlobalStyle } from 'styled-components'
import colors from 'styles/colors'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }

  body {
    background-color: ${colors.gray50};
  }
`

export default GlobalStyle
