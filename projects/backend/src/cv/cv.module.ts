import { Module } from '@nestjs/common'
import { CVController } from './cv.controller'
import { CVRepository } from './cv.repository'
import { CVService } from './cv.service'

@Module({
  controllers: [CVController],
  providers: [CVRepository, CVService],
})
export class CVModule {}
