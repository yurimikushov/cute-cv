import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HelmetProvider } from 'react-helmet-async'
import 'logger/config'
import 'api/config'
import 'translation/config'
import { logError } from 'logger'
import store, { persistor } from 'services/store'
import GlobalErrorBoundary from 'components/GlobalErrorBoundary'
import ErrorBoundary from 'components/ErrorBoundary'
import ErrorBoundaryModal from 'components/ErrorBoundaryModal'
import ResetStyles from 'styles/global/ResetStyles'
import GlobalStyles from 'styles/global/GlobalStyles'
import App from './App'

render(
  <React.StrictMode>
    <GlobalErrorBoundary onError={logError} />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ResetStyles />
        <GlobalStyles />
        <ErrorBoundary fallback={ErrorBoundaryModal} onError={logError}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.querySelector('.app')
)
