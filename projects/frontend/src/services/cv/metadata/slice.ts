import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { MetadataStateT, UpdatePayloadT } from './model'

const initialState: MetadataStateT = {
  isSaved: true,
  savedAt: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/metadata`,
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.isSaved = payload.isSaved
      state.savedAt = payload.savedAt
    },
  },
})

export const { update } = actions
export default reducer
