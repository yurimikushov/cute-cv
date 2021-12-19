import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable } from 'services/cv'
import TextInput from 'components/TextInput'
import { CloseButton } from 'components/Button'
import LanguagePropsT from './Language.props'

const Container = styled.div`
  position: relative;
`

const LanguageField = styled(TextInput)`
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
        disabled={!editable}
        value={language}
        placeholder={t('placeholder')}
        maxLength={25}
        onChange={onChange}
      />
      {editable && <Close onClick={onDelete} />}
    </Container>
  )
}

export default Language
