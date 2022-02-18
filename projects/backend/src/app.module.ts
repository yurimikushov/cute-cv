import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as morgan from 'morgan'
import getEnvFileName from 'lib/getEnvFileName'
import { AuthMiddleware, CVModule } from './modules'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFileName(process.env.NODE_ENV),
      isGlobal: true,
    }),
    CVModule,
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
  }
}
