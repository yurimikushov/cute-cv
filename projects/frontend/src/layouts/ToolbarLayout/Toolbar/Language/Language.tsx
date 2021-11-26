import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import { LanguageEnum } from 'translation'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import LanguagePropsT from './Language.props'

const AVAILABLE_LANGUAGES = map(LanguageEnum)

const Language: FC<LanguagePropsT> = ({ className }) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'toolbar' })

  return (
    <div className={className}>
      <H2>{t('language.title')}</H2>
      <Radio
        activeOption={i18n.language}
        options={AVAILABLE_LANGUAGES}
        onChange={(language) => i18n.changeLanguage(language)}
      />
    </div>
  )
}

export default Language
