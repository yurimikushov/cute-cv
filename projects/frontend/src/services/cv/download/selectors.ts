import { RootState } from 'services/store'
import { DownloadStateT } from './model'

const selectIsDownloading = ({
  cv,
}: RootState): DownloadStateT['isDownloading'] => {
  return cv.download.isDownloading
}

export { selectIsDownloading }
