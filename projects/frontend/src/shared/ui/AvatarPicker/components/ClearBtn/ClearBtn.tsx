import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'shared/icons/close.svg'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import shadows from 'shared/styles/shadows'
import ClearBtnProps from './ClearBtn.props'

const Container = styled.button.attrs({
  type: 'button',
})`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: ${radiuses.full};
  line-height: 1.25rem;
  background-color: ${colors.white};
  box-shadow: ${shadows.sm};
`

const CloseSvg = styled(CloseIcon)`
  height: 0.75rem;
  color: ${colors.gray300};
`

const ClearBtn: FC<ClearBtnProps> = (props) => (
  <Container {...props}>
    <CloseSvg />
  </Container>
)

export default ClearBtn
