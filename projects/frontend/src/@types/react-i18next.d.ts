import 'react-i18next'
import { TranslationT } from 'translation'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: TranslationT
    }
  }
}
