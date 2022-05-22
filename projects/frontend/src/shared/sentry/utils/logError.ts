import * as Sentry from '@sentry/browser'
import { CaptureContext } from '@sentry/types'

const logError = (error: Error, context?: CaptureContext) => {
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  Sentry.captureException(error, context)
}

export default logError
