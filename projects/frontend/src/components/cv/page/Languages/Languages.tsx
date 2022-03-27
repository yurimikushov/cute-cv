import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import noop from 'lodash/noop'
import size from 'lodash/size'
import map from 'lodash/map'
import { H2 } from 'components/ui/H'
import Button from 'components/ui/Button'
import Language from './Language'
import LanguagesProps from './Languages.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Languages: FC<LanguagesProps> = ({
  editable,
  languages,
  maxCount = Number.MAX_SAFE_INTEGER,
  maxLength,
  onChange = noop,
  onDelete = noop,
  onAdd = noop,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      {map(languages, ({ id, language }) => (
        <Language
          key={id}
          editable={editable}
          language={language}
          maxLength={maxLength}
          onChange={(language) => onChange(id, language)}
          onDelete={() => onDelete(id)}
        />
      ))}
      {editable && size(languages) < maxCount && (
        <Add appearance='text' onClick={onAdd}>
          {t('add')}
        </Add>
      )}
    </Container>
  )
}

export default Languages
