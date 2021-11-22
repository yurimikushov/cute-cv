import { Controller, Get, Put, Body } from '@nestjs/common'
import { UpdateCvDto } from './dto'
import { CVService } from './cv.service'

@Controller('cv')
export class CVController {
  constructor(private readonly cvService: CVService) {}

  @Get()
  findOne() {
    return this.cvService.getCV()
  }

  @Put()
  update(@Body() updateCvDto: UpdateCvDto) {
    this.cvService.updateCV(updateCvDto)
  }
}
