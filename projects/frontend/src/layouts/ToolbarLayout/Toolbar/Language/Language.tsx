import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import map from 'lodash/map'
import { LanguageEnum } from 'translation'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import LanguagePropsT from './Language.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

const AVAILABLE_LANGUAGES = map(LanguageEnum)

const Language: FC<LanguagePropsT> = (props) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'toolbar' })

  return (
    <Container {...props}>
      <H2>{t('language.title')}</H2>
      <Radio
        activeOption={i18n.language}
        options={AVAILABLE_LANGUAGES}
        onChange={(language) => i18n.changeLanguage(language)}
      />
    </Container>
  )
}

export default Language
