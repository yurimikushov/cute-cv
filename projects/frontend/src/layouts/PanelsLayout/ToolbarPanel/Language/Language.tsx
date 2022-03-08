import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import map from 'lodash/map'
import { LanguageEnum } from 'translation'
import { useDownload } from 'services/cv'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import LanguageProps from './Language.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

const Language: FC<LanguageProps> = (props) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { isDownloading } = useDownload()

  return (
    <Container {...props}>
      <H2>{t('language.title')}</H2>
      <Radio
        value={i18n.language}
        disabled={isDownloading}
        onChange={(language) => i18n.changeLanguage(language)}
      >
        {map(LanguageEnum, (lang) => (
          <Radio.Item key={lang} value={lang}>
            {lang}
          </Radio.Item>
        ))}
      </Radio>
    </Container>
  )
}

export default Language
