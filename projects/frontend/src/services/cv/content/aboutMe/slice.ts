import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import { AboutMeStateT, UpdatePayloadT } from './model'

const initialState: AboutMeStateT = {
  aboutMe: '',
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/aboutMe`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      state.aboutMe = payload.content.aboutMe
    })
  },
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.aboutMe = payload.aboutMe
    },
  },
})

export const { update } = actions
export default reducer
