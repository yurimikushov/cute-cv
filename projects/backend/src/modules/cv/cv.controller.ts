import { Controller, Get, Put, Body, Req, Param } from '@nestjs/common'
import { FindOneCvParamsDto, UpdateCvParamsDto, UpdateCvDto } from './dto'
import { CVService } from './cv.service'
import { Request } from 'express'

@Controller('cv')
export class CVController {
  constructor(private readonly cvService: CVService) {}

  @Get()
  async findAll(@Req() req: Request) {
    return await this.cvService.getAll(req.user.uid)
  }

  @Get(':id')
  async findOne(@Req() req: Request, @Param() params: FindOneCvParamsDto) {
    return await this.cvService.get(req.user.uid, params.id)
  }

  @Put(':id')
  async update(
    @Req() req: Request,
    @Param() params: UpdateCvParamsDto,
    @Body() updateCvDto: UpdateCvDto
  ) {
    return await this.cvService.update(req.user.uid, params.id, updateCvDto)
  }
}
