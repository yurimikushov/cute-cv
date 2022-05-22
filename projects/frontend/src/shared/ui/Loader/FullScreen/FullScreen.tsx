import { FC } from 'react'
import styled from 'styled-components'
import colors from 'shared/styles/colors'
import zIndex from 'shared/styles/zIndex'
import Loader from '../Loader'
import FullScreenProps from './FullScreen.props'

const FullScreen: FC<FullScreenProps> = styled.div.attrs({
  children: <Loader />,
})`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.fullScreenLoader};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  opacity: 0.95;
`

FullScreen.displayName = 'FullScreenLoader'

export default FullScreen
