import { Controller, Get } from '@nestjs/common'
import { CVService } from './cv.service'

@Controller('cv')
export class CVController {
  constructor(private readonly cvService: CVService) {}

  @Get()
  findOne() {
    return this.cvService.getCV()
  }
}
