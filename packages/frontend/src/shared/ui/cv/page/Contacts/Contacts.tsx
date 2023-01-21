import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { H1 } from 'shared/ui/H'
import ContactsProps from './Contacts.props'

const Container = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const Contacts: FC<ContactsProps> = ({ children, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      {children}
    </Container>
  )
}

export default Contacts
