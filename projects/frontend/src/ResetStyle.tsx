import { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  button {
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
  }
`

export default ResetStyle
