class UpdateCvDto {
  readonly fullName: string
  readonly position: string
  readonly avatar: string
  readonly aboutMe: string
  readonly experiences: Array<ExperienceDto>
  readonly educations: Array<EducationDto>
  readonly contacts: Array<ContactDto>
  readonly technologies: string
  readonly languages: Array<LanguageDto>
}

class ExperienceDto {
  readonly id: string
  readonly position: string
  readonly company: string
  readonly duration: string
  readonly description: string
}

class EducationDto {
  readonly id: string
  readonly degree: string
  readonly university: string
  readonly duration: string
}

class ContactDto {
  readonly id: string
  readonly text: string
  readonly href: string
}

class LanguageDto {
  readonly id: string
  readonly language: string
}

export { UpdateCvDto }
