import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { H2 } from 'shared/ui/H'
import LanguagesProps from './Languages.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.5rem;
  }
`
const Languages: FC<LanguagesProps> = ({ children, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      {children}
    </Container>
  )
}

export default Languages
