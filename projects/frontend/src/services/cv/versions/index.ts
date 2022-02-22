export { default as versionsReducer, markAsUnsaved } from './slice'
export {
  selectCurrentCvId,
  selectCvContent,
  selectCvMetadata,
} from './selectors'
export {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useCurrentCvContent,
  useSelectCv,
} from './hooks'
export type { CV } from './selectors'
export {
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
