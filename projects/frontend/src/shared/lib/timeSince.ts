import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import enLocale from 'date-fns/locale/en-US'
import ruLocale from 'date-fns/locale/ru'
import { LanguageEnum } from 'shared/translations'

const timeSince = (
  date: Date,
  lang: LanguageEnum = LanguageEnum.en
): string => {
  const locale = lang === LanguageEnum.en ? enLocale : ruLocale

  return formatDistanceToNow(date, {
    locale,
    includeSeconds: true,
  })
}

export default timeSince
