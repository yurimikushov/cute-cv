import { forwardRef, ForwardRefRenderFunction } from 'react'
import styled from 'styled-components'
import colors from 'shared/styles/colors'
import fonts from 'shared/styles/fonts'
import radiuses from 'shared/styles/radiuses'
import shadows from 'shared/styles/shadows'
import PickBtnProps from './PickBtn.props'

const Container = styled.button.attrs({
  type: 'button',
})`
  height: 100%;
  width: 100%;
  font-size: ${fonts.size.xl};
  color: ${colors.gray300};
  background-color: ${colors.white};
  border-radius: ${radiuses.full};
  box-shadow: ${shadows.sm};
`

const PickBtn: ForwardRefRenderFunction<HTMLButtonElement, PickBtnProps> = (
  props,
  ref
) => (
  <Container {...props} ref={ref}>
    +
  </Container>
)

export default forwardRef(PickBtn)
