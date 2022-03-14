import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Scope,
} from '@nestjs/common'
import { catchError, finalize, Observable, throwError } from 'rxjs'
import * as Sentry from '@sentry/node'
import { SentryService } from './sentry.service'

@Injectable({ scope: Scope.REQUEST })
export class SentryInterceptor implements NestInterceptor {
  constructor(private sentryService: SentryService) {}

  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    const span = this.sentryService.startChild({ op: `Route handler` })

    return next.handle().pipe(
      catchError((error) => {
        Sentry.captureException(
          error,
          this.sentryService.span.getTraceContext()
        )

        return throwError(() => error)
      }),
      finalize(() => {
        span.finish()
        this.sentryService.span.finish()
      })
    )
  }
}
