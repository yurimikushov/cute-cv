import 'react-i18next'
import { Translation } from 'shared/translations'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: Translation
    }
  }
}
