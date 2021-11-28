import { FC } from 'react'
import styled from 'styled-components'
import Loader from '../Loader'
import FullScreenPropsT from './FullScreen.props'

const FullScreen: FC<FullScreenPropsT> = styled.div.attrs({
  children: <Loader />,
})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  opacity: 0.95;
`

export default FullScreen
