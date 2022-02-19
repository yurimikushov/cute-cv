import { IsID } from 'validators'

class FindOneCvParamsDto {
  @IsID()
  readonly id: string
}

export { FindOneCvParamsDto }
