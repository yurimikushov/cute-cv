import InnerLoader from './Loader'
import FullScreen from './FullScreen'

type InnerLoaderInterface = typeof InnerLoader

type LoaderInterface = InnerLoaderInterface & {
  FullScreen: typeof FullScreen
}

const Loader = InnerLoader as LoaderInterface

Loader.FullScreen = FullScreen

export default Loader
