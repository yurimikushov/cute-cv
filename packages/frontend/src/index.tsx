/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import store from 'services/store'
import 'shared/sentry/init'
import 'shared/api/init'
import 'shared/translations/init'
import 'shared/firebase/performance/init'
import { logError } from 'shared/sentry'
import GlobalErrorBoundary from 'shared/ui/error-boundary/GlobalErrorBoundary'
import ErrorBoundary from 'shared/ui/error-boundary/ErrorBoundary'
import ErrorBoundaryModal from 'shared/ui/error-boundary/ErrorBoundaryModal'
import { NotificationsProvider } from 'shared/ui/Notifications'
import ResetStyles from 'shared/styles/global/ResetStyles'
import GlobalStyles from 'shared/styles/global/GlobalStyles'
import App from './App'

createRoot(document.querySelector('.app') as HTMLDivElement).render(
  <React.StrictMode>
    <GlobalErrorBoundary onError={logError} />
    <Provider store={store}>
      <ResetStyles />
      <GlobalStyles />
      <ErrorBoundary fallback={ErrorBoundaryModal} onError={logError}>
        <HelmetProvider>
          <NotificationsProvider>
            <App />
          </NotificationsProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
)
