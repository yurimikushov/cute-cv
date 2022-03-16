import { FC } from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import colors from 'styles/colors'
import ThereIsCvOfUnsignedInUserNotificationProps from './ThereIsCvOfUnsignedInUserNotification.props'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`

const Description = styled.p`
  color: ${colors.black};
`

const ThereIsCvOfUnsignedInUserNotification: FC<
  ThereIsCvOfUnsignedInUserNotificationProps
> = ({ onSave, ...props }) => {
  return (
    <Container {...props}>
      <Description>
        {/* Есть резюме, которое вы создали, когда еще не авторизовались.
          Сохранить его? */}
        There is a cv that you created when you were not signed in yet. Save it?
      </Description>
      <Button appearance='text' withoutPaddings onClick={onSave}>
        {/* Да, сохранить */}
        Yes, save
      </Button>
    </Container>
  )
}

export default ThereIsCvOfUnsignedInUserNotification
