import InnerLoader from './Loader'
import FullScreen from './FullScreen'

type InnerLoaderT = typeof InnerLoader

type LoaderT = InnerLoaderT & {
  FullScreen: typeof FullScreen
}

const Loader = InnerLoader as LoaderT

Loader.FullScreen = FullScreen

export default Loader
