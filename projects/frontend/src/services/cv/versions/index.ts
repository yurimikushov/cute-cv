export { default as versionsReducer } from './slice'
export { useAllCvMetadata, useCvMetadata, useCvContent } from './hooks'
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
