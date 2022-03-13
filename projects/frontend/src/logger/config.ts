import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}
