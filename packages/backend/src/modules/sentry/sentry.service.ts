import { REQUEST } from '@nestjs/core'
import { Inject, Injectable, Scope } from '@nestjs/common'
import { Request } from 'express'
import * as Sentry from '@sentry/node'
import { Span } from '@sentry/tracing'
import { SpanContext } from '@sentry/types'

@Injectable({ scope: Scope.REQUEST })
export class SentryService {
  constructor(@Inject(REQUEST) private request: Request) {
    const { method, headers, url } = this.request

    const transaction = Sentry.startTransaction({
      name: `Route: ${method} ${url}`,
      op: 'transaction',
    })

    Sentry.getCurrentHub().configureScope((scope) => {
      scope.setSpan(transaction)

      scope.setContext('http', {
        method,
        url,
        headers,
      })
    })
  }

  get span(): Span | undefined {
    return Sentry.getCurrentHub().getScope().getSpan()
  }

  startChild(spanContext: SpanContext): Span {
    return this.span.startChild(spanContext)
  }
}
