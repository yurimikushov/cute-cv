import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import { AvatarStateT, UpdatePayloadT } from './model'

const initialState: AvatarStateT = {
  src: null,
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/avatar`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      state.src = payload.content.avatar
    })
  },
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.src = payload.src
    },
    erase: (state) => {
      state.src = null
    },
  },
})

export const { update, erase } = actions
export default reducer
