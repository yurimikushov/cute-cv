import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import * as helmet from 'helmet'
import { AppModule } from './app.module'

const main = async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: process.env.FRONTEND_ORIGIN })
  app.use(helmet())
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT)
}

main()
