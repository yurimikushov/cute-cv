import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const main = async () => {
  const app = await NestFactory.create(AppModule)
  app.enableCors({ origin: process.env.FRONTEND_ORIGIN })
  await app.listen(process.env.PORT)
}

main()
