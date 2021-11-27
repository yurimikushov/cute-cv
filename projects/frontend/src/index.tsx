import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import 'api/config'
import store from 'services/store'
import 'translation/config'
import App from './App'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }

  body {
    background-color: #e5e5e5;
  }
`

render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('.app')
)
