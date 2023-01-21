import { VFC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { H2 } from 'shared/ui/H'
import TextArea from 'shared/ui/TextArea'
import TechnologiesProps from './Technologies.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`

const Description = styled(TextArea)`
  ${({ readonly }) => !readonly && 'min-height: 5rem;'}
`

const Technologies: VFC<TechnologiesProps> = ({
  editable,
  technologies,
  maxLength,
  onChange,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'technologies' })

  const handleChangeTechnologies = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (editable) {
      onChange?.(e.target.value)
    }
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Description
        readonly={!editable}
        value={technologies}
        placeholder={t('placeholder')}
        maxLength={maxLength}
        onChange={handleChangeTechnologies}
      />
    </Container>
  )
}

export default Technologies
