import { object, array, string, number, date, boolean, InferType } from 'yup'

const ID_LENGTH = 21 // nanoid length

const id = () => string().length(ID_LENGTH)

const experienceSchema = object({
  id: id().required(),
  position: string().defined(),
  company: string().defined(),
  duration: string().defined(),
  description: string().defined(),
})

const educationSchema = object({
  id: id().required(),
  degree: string().defined(),
  university: string().defined(),
  duration: string().defined(),
})

const contactSchema = object({
  id: id().required(),
  text: string().defined(),
  href: string().defined(),
})

const languageSchema = object({
  id: id().required(),
  language: string().defined(),
})

const cvMetadataSchema = object({
  publicId: id().optional(),
  id: id().required(),
  name: string().required(),
  number: number().required(),
  savedAt: date().nullable().defined(),
  allowShare: boolean().required(),
}).required()

const contentSchema = object({
  fullName: string().defined(),
  position: string().defined(),
  avatar: string().nullable().defined(),
  aboutMe: string().defined(),
  experiences: array(experienceSchema).defined(),
  educations: array(educationSchema).defined(),
  contacts: array(contactSchema).defined(),
  technologies: string().defined(),
  languages: array(languageSchema).defined(),
}).required()

const cvSchema = object({
  metadata: cvMetadataSchema,
  content: contentSchema,
})

type Cv = InferType<typeof cvSchema>
type CvMetadata = InferType<typeof cvMetadataSchema>

export { cvSchema, cvMetadataSchema }
export type { Cv, CvMetadata }
