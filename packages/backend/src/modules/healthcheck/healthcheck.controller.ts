import { Controller, Get } from '@nestjs/common'

@Controller('healthcheck')
export class HealthCheckController {
  @Get()
  async check() {
    return `I'm alive`
  }
}
