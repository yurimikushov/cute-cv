import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable, LANGUAGE_MAX_LENGTH } from 'services/cv'
import TextInput from 'components/TextInput'
import { CloseButton } from 'components/Button'
import LanguagePropsT from './Language.props'

const Container = styled.div`
  position: relative;
`

const LanguageField = styled(TextInput)`
  padding-right: 1.25rem;
  min-width: 100%;
`

const Close = styled(CloseButton)`
  position: absolute;
  top: 0.375rem;
  right: 0.375rem;
`

const Language: FC<LanguagePropsT> = ({
  language,
  onChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })
  const { editable } = useEditable()

  return (
    <Container {...props}>
      <LanguageField
        readonly={!editable}
        value={language}
        placeholder={t('placeholder')}
        maxLength={LANGUAGE_MAX_LENGTH}
        onChange={onChange}
      />
      {editable && <Close onClick={onDelete} />}
    </Container>
  )
}

export default Language
