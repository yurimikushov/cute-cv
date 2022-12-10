import { RootState } from 'services/store'

const selectIsDownloading = (state: RootState) => {
  return state['download-cv'].isDownloading
}

export { selectIsDownloading }
