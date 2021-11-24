import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { MetadataStateT, SavedPayloadT } from './model'

const initialState: MetadataStateT = {
  isSaved: true,
  savedAt: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/metadata`,
  initialState,
  reducers: {
    saved: (state, { payload }: PayloadAction<SavedPayloadT>) => {
      state.isSaved = true
      state.savedAt = payload.savedAt
    },
    unsaved: (state) => {
      state.isSaved = false
      state.savedAt = null
    },
  },
})

export const { saved, unsaved } = actions
export default reducer
