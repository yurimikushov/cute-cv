import { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as LoaderIcon } from 'icons/loader.svg'
import LoaderPropsT from './Loader.props'

const spin = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader: FC<LoaderPropsT> = styled(LoaderIcon)<LoaderPropsT>`
  width: 3rem;
  height: 3rem;
  color: #000;
  animation: ${spin} 1s linear infinite;
`

export default Loader
