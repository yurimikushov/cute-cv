import { Controller, Get, Param } from '@nestjs/common'
import { CVService } from './cv.service'

@Controller('cv')
export class CVController {
  constructor(private readonly cvService: CVService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvService.getCV(id)
  }
}
