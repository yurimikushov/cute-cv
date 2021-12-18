import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as LoaderIcon } from 'icons/loader.svg'
import colors from 'styles/colors'
import keyframes from 'styles/keyframes'
import LoaderPropsT from './Loader.props'

const Loader: FC<LoaderPropsT> = styled(LoaderIcon)`
  width: 3rem;
  height: 3rem;
  color: ${colors.black};
  animation: ${keyframes.spin} 1s linear infinite;
`

export default Loader
