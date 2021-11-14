import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SavingStateT } from './model'

const initialState: SavingStateT = {
  isSaved: true,
  savedAt: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.app}/saving`,
  initialState,
  reducers: {
    markAsUnsaved: (state) => {
      state.isSaved = false
      state.savedAt = null
    },
    markAsSaved: (state) => {
      state.isSaved = true
      state.savedAt = new Date()
    },
  },
})

export const { markAsUnsaved, markAsSaved } = actions
export default reducer
