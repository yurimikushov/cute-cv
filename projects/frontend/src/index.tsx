import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'api/config'
import store from 'services/store'
import 'translation/config'
import ResetStyles from 'styles/global/ResetStyles'
import GlobalStyles from 'styles/global/GlobalStyles'
import App from './App'

render(
  <React.StrictMode>
    <Provider store={store}>
      <ResetStyles />
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('.app')
)
