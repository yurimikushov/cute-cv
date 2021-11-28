import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'api/config'
import store from 'services/store'
import 'translation/config'
import ResetStyle from './ResetStyle'
import GlobalStyle from 'GlobalStyle'
import App from './App'

render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('.app')
)
