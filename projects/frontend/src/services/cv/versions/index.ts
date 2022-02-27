export {
  default as versionsReducer,
  updateCvMetadata,
  markAsUnsaved,
} from './slice'
export {
  selectCurrentCvId,
  selectCvContent,
  selectCvMetadata,
} from './selectors'
export {
  useInitAllCv,
  useUpdateCv,
  useCvCount,
  useAllCvMetadata,
  useCurrentCvMetadata,
  useCurrentCvContent,
  useSelectCv,
  useAddCv,
  useDeleteCv,
} from './hooks'
export type { CV } from './selectors'
export {
  MAX_CV_VERSIONS,
  MAX_FULL_NAME_LENGTH,
  MAX_POSITION_LENGTH,
  MAX_ABOUT_ME_LENGTH,
  MAX_EXPERIENCES_SIZE,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  MAX_EDUCATIONS_SIZE,
  EDUCATION_DEGREE_MAX_LENGTH,
  EDUCATION_UNIVERSITY_MAX_LENGTH,
  EDUCATION_DURATION_MAX_LENGTH,
  MAX_CONTACTS_SIZE,
  CONTACT_TEXT_MAX_LENGTH,
  CONTACT_HREF_MAX_LENGTH,
  MAX_TECHNOLOGIES_LENGTH,
  MAX_LANGUAGES_SIZE,
  LANGUAGE_MAX_LENGTH,
} from './constants'
export { isCvContentChanged } from './matchers'
