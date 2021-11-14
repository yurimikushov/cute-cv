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
    setSaved: (state) => {
      state.isSaved = true
      state.savedAt = new Date()
    },
    setUnsaved: (state) => {
      state.isSaved = false
      state.savedAt = null
    },
  },
})

export const { setSaved, setUnsaved } = actions
export default reducer
