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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-style: normal;
  }
`

export default ResetStyle
