import { forwardRef, ForwardRefRenderFunction } from 'react'
import styled from 'styled-components'
import HiddenImgInputPropsT from './HiddenImgInput.props'

const HiddenFileInput = styled.input.attrs({
  type: 'file',
})`
  display: none;
`

const ACCEPT_FORMATS = ['.png', '.jpg', '.jpeg'].join(',')

const HiddenImgInput: ForwardRefRenderFunction<
  HTMLInputElement,
  HiddenImgInputPropsT
> = (props, ref) => (
  <HiddenFileInput {...props} ref={ref} accept={ACCEPT_FORMATS} />
)

export default forwardRef(HiddenImgInput)
