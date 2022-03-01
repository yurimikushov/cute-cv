import { Controller, Get, Put, Delete, Body, Req, Param } from '@nestjs/common'
import { Request } from 'express'
import {
  FindOneCvParamsDto,
  UpdateOneCvParamsDto,
  UpdateOneCvDto,
  DeleteOneCvParamsDto,
} from './dto'
import { CVService } from './cv.service'

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
  async updateOne(
    @Req() req: Request,
    @Param() params: UpdateOneCvParamsDto,
    @Body() updateCvDto: UpdateOneCvDto
  ) {
    return await this.cvService.update(req.user.uid, params.id, updateCvDto)
  }

  @Delete(':id')
  async deleteOne(@Req() req: Request, @Param() params: DeleteOneCvParamsDto) {
    return await this.cvService.delete(req.user.uid, params.id)
  }
}
