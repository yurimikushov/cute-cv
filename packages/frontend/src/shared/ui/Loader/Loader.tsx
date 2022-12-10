import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as LoaderIcon } from 'shared/icons/loader.svg'
import colors from 'shared/styles/colors'
import keyframes from 'shared/styles/keyframes'
import LoaderProps from './Loader.props'

const Loader: FC<LoaderProps> = styled(LoaderIcon)`
  width: 3rem;
  height: 3rem;
  color: ${colors.black};
  animation: ${keyframes.spin} 1s linear infinite;
`

Loader.displayName = 'Loader'

export default Loader
