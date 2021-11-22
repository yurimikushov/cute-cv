import { Controller, Get, Put, Body, Req } from '@nestjs/common'
import { UpdateCvDto } from './dto'
import { CVService } from './cv.service'
import { Request } from 'express'

@Controller('cv')
export class CVController {
  constructor(private readonly cvService: CVService) {}

  @Get()
  async findOne(@Req() req: Request) {
    return await this.cvService.getCV(req.user.uid)
  }

  @Put()
  async update(@Req() req: Request, @Body() updateCvDto: UpdateCvDto) {
    await this.cvService.updateCV(req.user.uid, updateCvDto)
  }
}