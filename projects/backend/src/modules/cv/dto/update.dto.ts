import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  MaxLength,
  ArrayMaxSize,
} from 'class-validator'
import { Type } from 'class-transformer'
import { IsID } from 'validators'

class UpdateCvParamsDto {
  @IsID()
  readonly id: string
}

class UpdateCvDto {
  @IsString()
  @MaxLength(50)
  readonly fullName: string

  @IsString()
  @MaxLength(50)
  readonly position: string

  @IsString()
  @IsOptional()
  readonly avatar: string

  @IsString()
  @MaxLength(1_000)
  readonly aboutMe: string

  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  @Type(() => ExperienceDto)
  readonly experiences: Array<ExperienceDto>

  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  @Type(() => EducationDto)
  readonly educations: Array<EducationDto>

  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  @Type(() => ContactDto)
  readonly contacts: Array<ContactDto>

  @IsString()
  @MaxLength(500)
  readonly technologies: string

  @IsArray()
  @ArrayMaxSize(10)
  @ValidateNested()
  @Type(() => LanguageDto)
  readonly languages: Array<LanguageDto>
}

class ExperienceDto {
  @IsID()
  readonly id: string

  @IsString()
  @MaxLength(50)
  readonly position: string

  @IsString()
  @MaxLength(50)
  readonly company: string

  @IsString()
  @MaxLength(25)
  readonly duration: string

  @IsString()
  @MaxLength(1_000)
  readonly description: string
}

class EducationDto {
  @IsID()
  readonly id: string

  @IsString()
  @MaxLength(75)
  readonly degree: string

  @IsString()
  @MaxLength(75)
  readonly university: string

  @IsString()
  @MaxLength(25)
  readonly duration: string
}

class ContactDto {
  @IsID()
  readonly id: string

  @IsString()
  @MaxLength(50)
  readonly text: string

  @IsString()
  @MaxLength(50)
  readonly href: string
}

class LanguageDto {
  @IsID()
  readonly id: string

  @IsString()
  @MaxLength(25)
  readonly language: string
}

export { UpdateCvParamsDto, UpdateCvDto }
