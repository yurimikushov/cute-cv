import { RootState } from 'services/store'
import { DownloadState } from './model'

const selectIsDownloading = ({
  cv,
}: RootState): DownloadState['isDownloading'] => {
  return cv.download.isDownloading
}

export { selectIsDownloading }
