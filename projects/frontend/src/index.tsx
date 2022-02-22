import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HelmetProvider } from 'react-helmet-async'
import 'api/config'
import store, { persistor } from 'services/store'
import 'translation/config'
import ResetStyles from 'styles/global/ResetStyles'
import GlobalStyles from 'styles/global/GlobalStyles'
import App from './App'

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ResetStyles />
        <GlobalStyles />
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('.app')
)
