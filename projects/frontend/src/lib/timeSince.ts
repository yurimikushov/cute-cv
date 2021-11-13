import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import enLocale from 'date-fns/locale/en-US'
import ruLocale from 'date-fns/locale/ru'
import { LanguageT } from 'translation'

const timeSince = (date: Date, lang: LanguageT = 'en'): string => {
  const locale = lang === 'en' ? enLocale : ruLocale

  return formatDistanceToNow(date, {
    locale,
    includeSeconds: true,
  })
}

export default timeSince
