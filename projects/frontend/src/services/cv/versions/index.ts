export {
  default as versionsReducer,
  markAsUnsaved,
  updateCvMetadata,
} from './slice'
export {
  selectCurrentCvId,
  selectCvContent,
  selectCvMetadata,
} from './selectors'
export {
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
  MAX_TECHNOLOGIES_LENGTH,
  MAX_EXPERIENCES_SIZE,
  MAX_EDUCATIONS_SIZE,
  MAX_CONTACTS_SIZE,
  MAX_LANGUAGES_SIZE,
} from './constants'
export { isCvContentChanged } from './matchers'
