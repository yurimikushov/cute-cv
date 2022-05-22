/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { HelmetProvider } from 'react-helmet-async'
import 'shared/sentry/config'
import 'api/config'
import 'translations/config'
import { logError } from 'shared/sentry'
import store, { persistor } from 'services/store'
import GlobalErrorBoundary from 'shared/ui/error-boundary/GlobalErrorBoundary'
import ErrorBoundary from 'shared/ui/error-boundary/ErrorBoundary'
import ErrorBoundaryModal from 'shared/ui/error-boundary/ErrorBoundaryModal'
import { NotificationsProvider } from 'shared/ui/Notifications'
import ResetStyles from 'styles/global/ResetStyles'
import GlobalStyles from 'styles/global/GlobalStyles'
import App from './App'

createRoot(document.querySelector('.app') as HTMLDivElement).render(
  <React.StrictMode>
    <GlobalErrorBoundary onError={logError} />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ResetStyles />
        <GlobalStyles />
        <ErrorBoundary fallback={ErrorBoundaryModal} onError={logError}>
          <HelmetProvider>
            <NotificationsProvider>
              <App />
            </NotificationsProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
