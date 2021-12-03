import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './en/translation'
import ruTranslation from './ru/translation'

const resources: Resource = {
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
}

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('persist:lang') ?? 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
})

i18n.on('languageChanged', (lang) => {
  localStorage.setItem('persist:lang', lang)
})
