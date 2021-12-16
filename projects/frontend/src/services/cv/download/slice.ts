import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { DownloadStateT } from './model'

const initialState: DownloadStateT = {
  isDownloading: false,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/download`,
  initialState,
  reducers: {
    begin: (state) => {
      state.isDownloading = true
    },
    success: (state) => {
      state.isDownloading = false
    },
  },
})

export const { begin, success } = actions
export default reducer
