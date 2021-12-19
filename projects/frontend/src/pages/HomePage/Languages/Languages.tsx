import { FC, useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import { useEditable, useLanguages, MAX_LANGUAGES_SIZE } from 'services/cv'
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
  const { languages, handleAdd, handleChange, handleDelete } = useLanguages()

  useLayoutEffect(() => {
    if (isEmpty(languages)) {
      handleAdd()
    }
  }, [isEmpty(languages)])

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      {map(languages, ({ id, language }) => (
        <Language
          key={id}
          language={language}
          onChange={(language) => handleChange({ id, language })}
          onDelete={() => handleDelete({ id })}
        />
      ))}
      {editable && size(languages) < MAX_LANGUAGES_SIZE && (
        <Add onClick={handleAdd}>Add</Add>
      )}
    </Container>
  )
}

export default Languages
