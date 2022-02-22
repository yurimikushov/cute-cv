import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  useEditable,
  useCurrentCvContent,
  MAX_TECHNOLOGIES_LENGTH,
} from 'services/cv'
import { H2 } from 'components/H'
import TextArea from 'components/TextArea'
import TechnologiesPropsT from './Technologies.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`

const Description = styled(TextArea)``

const Technologies: FC<TechnologiesPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'technologies' })
  const { editable } = useEditable()
  const {
    cv: { technologies },
    changeTechnologies,
  } = useCurrentCvContent()

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Description
        disabled={!editable}
        value={technologies}
        placeholder={t('placeholder')}
        maxLength={MAX_TECHNOLOGIES_LENGTH}
        onChange={changeTechnologies}
      />
    </Container>
  )
}

export default Technologies
