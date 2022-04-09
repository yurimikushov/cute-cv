import { FC, useCallback } from 'react'
import styled, { css } from 'styled-components'
import useTimer from 'hooks/useTimer'
import { CloseButton } from 'components/ui/Button'
import { ReactComponent as SuccessIcon } from 'icons/success.svg'
import { ReactComponent as ErrorIcon } from 'icons/error.svg'
import colors from 'styles/colors'
import shadows from 'styles/shadows'
import radiuses from 'styles/radiuses'
import keyframes from 'styles/keyframes'
import NotificationProps from './Notification.props'

const Container = styled.div`
  max-width: 24rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;

  padding: 0.5rem;
  background-color: ${colors.white};
  border-radius: ${radiuses.md};
  box-shadow: ${shadows.sm};

  animation: ${keyframes['shake-with-delay']} 7s ease 1s infinite;

  &:hover,
  &::focus-within {
    animation: none;
  }
`

const Content = styled.div`
  max-width: 20rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const statusIconMixin = css`
  min-width: 1.5rem;
  width: 1.5rem;
  min-height: 1.5rem;
  height: 1.5rem;
`

const SuccessStatusIcon = styled(SuccessIcon)`
  ${statusIconMixin}

  color: ${colors.green200};
`

const ErrorStatusIcon = styled(ErrorIcon)`
  ${statusIconMixin}

  color: #ff4d4f;
  color: ${colors.red200};
`

const ContentInner = styled.div``

const Notification: FC<NotificationProps> = ({
  id,
  options,
  children,
  onHide,
  ...props
}) => {
  // eslint-disable-next-line no-magic-numbers
  const { type = 'none', duration = -1 } = options

  const handleHide = useCallback(() => onHide(id), [id])

  useTimer(duration, handleHide)

  return (
    <Container {...props}>
      <Content>
        {type === 'success' && <SuccessStatusIcon />}
        {type === 'error' && <ErrorStatusIcon />}
        <ContentInner>{children}</ContentInner>{' '}
      </Content>
      <CloseButton onClick={handleHide} />
    </Container>
  )
}

export default Notification
