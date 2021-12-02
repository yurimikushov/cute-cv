import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { json } from 'express'
import * as helmet from 'helmet'
import { AppModule } from './app.module'

const main = async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: process.env.FRONTEND_ORIGIN })
  app.use(helmet())
  app.use(json({ limit: '10mb' }))
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT)
}

main()
