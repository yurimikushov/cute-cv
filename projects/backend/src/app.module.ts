import {
  MiddlewareConsumer,
  DynamicModule,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as morgan from 'morgan'
import * as Sentry from '@sentry/node'
import getEnvFileName from 'lib/getEnvFileName'
import { AuthMiddleware, SentryModule, CVModule } from './modules'

const isProd = process.env.NODE_ENV === 'production'

const getOnlyProductionImports = () => {
  const imports: Array<DynamicModule> = []

  if (isProd) {
    imports.push(
      SentryModule.forRoot({
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1.0,
      })
    )
  }

  return imports
}

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFileName(process.env.NODE_ENV),
      isGlobal: true,
    }),
    CVModule,
    ...getOnlyProductionImports(),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(morgan('combined'))
      .forRoutes({ path: '*', method: RequestMethod.ALL })

    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    })

    if (isProd) {
      consumer.apply(Sentry.Handlers.requestHandler()).forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
    }
  }
}
