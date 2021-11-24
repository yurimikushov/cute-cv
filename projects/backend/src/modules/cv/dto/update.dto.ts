import { IsString, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class UpdateCvDto {
  @IsString()
  readonly fullName: string

  @IsString()
  readonly position: string

  @IsString()
  readonly avatar: string

  @IsString()
  readonly aboutMe: string

  @IsArray()
  @ValidateNested()
  @Type(() => ExperienceDto)
  readonly experiences: Array<ExperienceDto>

  @IsArray()
  @ValidateNested()
  @Type(() => EducationDto)
  readonly educations: Array<EducationDto>

  @IsArray()
  @ValidateNested()
  @Type(() => ContactDto)
  readonly contacts: Array<ContactDto>

  @IsString()
  readonly technologies: string

  @IsArray()
  @ValidateNested()
  @Type(() => LanguageDto)
  readonly languages: Array<LanguageDto>
}

class ExperienceDto {
  @IsString()
  readonly id: string

  @IsString()
  readonly position: string

  @IsString()
  readonly company: string

  @IsString()
  readonly duration: string

  @IsString()
  readonly description: string
}

class EducationDto {
  @IsString()
  readonly id: string

  @IsString()
  readonly degree: string

  @IsString()
  readonly university: string

  @IsString()
  readonly duration: string
}

class ContactDto {
  @IsString()
  readonly id: string

  @IsString()
  readonly text: string

  @IsString()
  readonly href: string
}

class LanguageDto {
  @IsString()
  readonly id: string

  @IsString()
  readonly language: string
}

export { UpdateCvDto }
