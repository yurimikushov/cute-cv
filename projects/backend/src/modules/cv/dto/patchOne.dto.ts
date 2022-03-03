import {
  IsString,
  IsOptional,
  IsObject,
  MaxLength,
  ValidateNested,
} from 'class-validator'
import { Type } from 'class-transformer'
import { IsID } from 'validators'

class PatchOneCvParamsDto {
  @IsID()
  readonly id: string
}

class PatchOneCvDto {
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => MetadataDto)
  readonly metadata?: MetadataDto
}

class MetadataDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  readonly name?: string
}

export type { PatchOneCvParamsDto, PatchOneCvDto }
