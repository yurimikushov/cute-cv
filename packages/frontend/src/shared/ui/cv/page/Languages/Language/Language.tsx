import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import TextInput from 'shared/ui/TextInput'
import { CloseButton } from 'shared/ui/Button'
import LanguageProps from './Language.props'

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

const Language: FC<LanguageProps> = ({
  editable,
  language,
  maxLength,
  onChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <Container {...props}>
      <LanguageField
        readonly={!editable}
        value={language}
        placeholder={t('placeholder')}
        maxLength={maxLength}
        onChange={handleChange}
      />
      {editable && <Close onClick={onDelete} />}
    </Container>
  )
}

export default Language
