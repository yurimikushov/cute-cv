export {
  default as versionsReducer,
  updateCvMetadata,
  markAsUnsaved,
} from './slice'
export {
  selectCurrentCvId,
  selectCurrentCv,
  selectCvContent,
  selectCvMetadata,
} from './selectors'
export {
  useInitAllCv,
  useUpdateCv,
  useUpdateCvMetadata,
  useUpdateCvName,
  useCvCount,
  useAllCvMetadata,
  useCurrentCv,
  useCurrentCvMetadata,
  useCurrentCvContent,
  useSelectCv,
  useAddEmptyCv,
  useAddCv,
  useMakeCvCopy,
  useDeleteCv,
} from './hooks'
export type { Cv, CvMetadata, CvContent } from './selectors'
export {
  CV_VERSIONS_MAX_COUNT,
  CV_NAME_MAX_LENGTH,
  FULL_NAME_MAX_LENGTH,
  POSITION_MAX_LENGTH,
  ABOUT_ME_MAX_LENGTH,
  EXPERIENCES_MAX_COUNT,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  EDUCATIONS_MAX_COUNT,
  EDUCATION_DEGREE_MAX_LENGTH,
  EDUCATION_UNIVERSITY_MAX_LENGTH,
  EDUCATION_DURATION_MAX_LENGTH,
  CONTACTS_MAX_COUNT,
  CONTACT_TEXT_MAX_LENGTH,
  CONTACT_HREF_MAX_LENGTH,
  MAX_TECHNOLOGIES_LENGTH,
  LANGUAGES_MAX_COUNT,
  LANGUAGE_MAX_LENGTH,
} from './constants'
export type { Experience, Education, Contact } from './model'
export { isCvContentChanged } from './matchers'
