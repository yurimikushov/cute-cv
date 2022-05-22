import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Button from 'shared/ui/Button'
import colors from 'styles/colors'
import CvOfUnsignedInUserExistsNotificationProps from './CvOfUnsignedInUserExistsNotification.props'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const Description = styled.p`
  color: ${colors.black};
`

const CvOfUnsignedInUserExistsNotification: FC<
  CvOfUnsignedInUserExistsNotificationProps
> = ({ onSave, ...props }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.saveCvOfUnsignedInUserNotification',
  })

  return (
    <Container {...props}>
      <Description>{t('description')}</Description>
      <Button appearance='text' withoutPaddings onClick={onSave}>
        {t('save')}
      </Button>
    </Container>
  )
}

export default CvOfUnsignedInUserExistsNotification
