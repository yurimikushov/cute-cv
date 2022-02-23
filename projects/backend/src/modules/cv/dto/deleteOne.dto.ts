import { IsID } from 'validators'

class DeleteOneCvParamsDto {
  @IsID()
  readonly id: string
}

export { DeleteOneCvParamsDto }
