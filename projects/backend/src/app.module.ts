import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as morgan from 'morgan'
import { AuthMiddleware } from './auth'
import { CVModule } from './cv'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ConfigModule.forRoot(), CVModule],
  controllers: [AppController],
  providers: [AppService],
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
