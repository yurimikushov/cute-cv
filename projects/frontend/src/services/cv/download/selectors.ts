import { RootStateT } from 'services/store'
import { DownloadStateT } from './model'

const selectIsDownloading = ({
  cv,
}: RootStateT): DownloadStateT['isDownloading'] => {
  return cv.download.isDownloading
}

export { selectIsDownloading }
