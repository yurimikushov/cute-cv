import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { DownloadState } from './model'

const initialState: DownloadState = {
  isDownloading: false,
}

const { actions, reducer } = createSlice({
  name: ServiceNameEnum.DownloadCv,
  initialState,
  reducers: {
    begin: (state) => {
      state.isDownloading = true
    },
    finish: (state) => {
      state.isDownloading = false
    },
  },
})

export const { begin, finish } = actions
export default reducer
