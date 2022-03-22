import { RootState } from 'services/store'
import { DownloadState } from './model'

const selectIsDownloading = (
  state: RootState
): DownloadState['isDownloading'] => {
  return state['edit-cv'].download.isDownloading
}

export { selectIsDownloading }
