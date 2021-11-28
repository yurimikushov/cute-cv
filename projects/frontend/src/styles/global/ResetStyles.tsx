import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    text-rendering: optimizeSpeed;
    line-height: 1.25;
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

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default ResetStyles
