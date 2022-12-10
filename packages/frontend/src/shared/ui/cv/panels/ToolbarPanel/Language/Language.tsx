import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import map from 'lodash/map'
import { LanguageEnum } from 'shared/translations'
import { H2 } from 'shared/ui/H'
import Radio from 'shared/ui/Radio'
import { useToolbarPanel } from '../ToolbarPanelContext'
import LanguageProps from './Language.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

const Language: FC<LanguageProps> = (props) => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'toolbar' })
  const { disabled } = useToolbarPanel()

  return (
    <Container {...props}>
      <H2>{t('language.title')}</H2>
      <Radio
        value={i18n.language}
        disabled={disabled}
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
