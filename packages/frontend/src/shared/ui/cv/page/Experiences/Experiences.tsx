import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { H1 } from 'shared/ui/H'
import ExperiencesProps from './Experiences.props'

const Container = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const Experiences: FC<ExperiencesProps> = ({ children, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      {children}
    </Container>
  )
}

export default Experiences
