import {
  Controller,
  Get,
  Put,
  Patch,
  Delete,
  Body,
  Req,
  Param,
} from '@nestjs/common'
import { Request } from 'express'
import {
  FindOneCvParamsDto,
  UpdateOneCvParamsDto,
  UpdateOneCvDto,
  PatchOneCvParamsDto,
  PatchOneCvDto,
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

  @Patch(':id')
  async patchOne(
    @Req() req: Request,
    @Param() params: PatchOneCvParamsDto,
    @Body() patchCvDto: PatchOneCvDto
  ) {
    return await this.cvService.patch(req.user.uid, params.id, patchCvDto)
  }

  @Delete(':id')
  async deleteOne(@Req() req: Request, @Param() params: DeleteOneCvParamsDto) {
    return await this.cvService.delete(req.user.uid, params.id)
  }
}
