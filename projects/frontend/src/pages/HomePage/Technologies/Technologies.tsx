import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  useEditable,
  useCurrentCvContent,
  MAX_TECHNOLOGIES_LENGTH,
} from 'services/cv'
import { H2 } from 'components/ui/H'
import TextArea from 'components/ui/TextArea'
import TechnologiesProps from './Technologies.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`

const Description = styled(TextArea)`
  ${({ readonly }) => !readonly && 'min-height: 5rem;'}
`

const Technologies: FC<TechnologiesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'technologies' })
  const { editable } = useEditable()
  const {
    cv: { technologies },
    changeTechnologies,
  } = useCurrentCvContent()

  const handleChangeTechnologies = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeTechnologies(e.target.value)
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Description
        readonly={!editable}
        value={technologies}
        placeholder={t('placeholder')}
        maxLength={MAX_TECHNOLOGIES_LENGTH}
        onChange={handleChangeTechnologies}
      />
    </Container>
  )
}

export default Technologies
