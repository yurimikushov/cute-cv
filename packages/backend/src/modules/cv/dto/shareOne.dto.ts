import { IsID } from 'validators'

class ShareOneCvParamsDto {
  @IsID()
  readonly id: string
}

export { ShareOneCvParamsDto }
