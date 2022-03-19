import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  ForbiddenException,
} from '@nestjs/common'
import { catchError, Observable } from 'rxjs'
import { EntityForbiddenError } from 'errors'

@Injectable()
export class ForbiddenInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof EntityForbiddenError) {
          throw new ForbiddenException(error.message)
        } else {
          throw error
        }
      })
    )
  }
}
