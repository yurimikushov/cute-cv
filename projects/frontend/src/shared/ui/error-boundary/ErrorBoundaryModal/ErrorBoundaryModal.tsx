import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Modal from 'shared/ui/Modal'
import Button from 'shared/ui/Button'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import ErrorBoundaryModalProps from './ErrorBoundaryModal.props'

const Container = styled(Modal)`
  padding: 1.5rem 2rem;

  & > * + * {
    margin-top: 1rem;
  }
`

const Title = styled.h1`
  font-size: ${fonts.size['2xl']};
  font-weight: bold;
  color: ${colors.black};
`

const Error = styled.p`
  font-size: ${fonts.size.lg};
  color: ${colors.black};
`

const ErrorBoundaryModal: FC<ErrorBoundaryModalProps> = ({
  onResetErrorBoundary,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'errorBoundaryModal',
  })
  return (
    <Container {...props}>
      <Title>{t('title')}</Title>
      <Error>{t('description')}</Error>
      <Button appearance='outlined' onClick={onResetErrorBoundary}>
        {t('reset')}
      </Button>
    </Container>
  )
}

export default ErrorBoundaryModal
