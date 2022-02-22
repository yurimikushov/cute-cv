import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import {
  useEditable,
  useCurrentCvContent,
  MAX_LANGUAGES_SIZE,
} from 'services/cv'
import useEffectWhen from 'hooks/useEffectWhen'
import { H2 } from 'components/H'
import Button from 'components/Button'
import Language from './Language'
import LanguagesPropsT from './Languages.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Languages: FC<LanguagesPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })
  const { editable } = useEditable()
  const {
    cv: { languages },
    addLanguage,
    changeLanguage,
    deleteLanguage,
  } = useCurrentCvContent()

  useEffectWhen(addLanguage, isEmpty(languages))

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      {map(languages, ({ id, language }) => (
        <Language
          key={id}
          language={language}
          onChange={(language) => changeLanguage(id, language)}
          onDelete={() => deleteLanguage(id)}
        />
      ))}
      {editable && size(languages) < MAX_LANGUAGES_SIZE && (
        <Add onClick={addLanguage}>Add</Add>
      )}
    </Container>
  )
}

export default Languages
