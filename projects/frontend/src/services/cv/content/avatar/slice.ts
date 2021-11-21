import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SERVICE_NAME } from '../constants'
import { AvatarStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: AvatarStateT = {
  src: null,
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/avatar`,
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.src = payload.src
    },
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.src = payload.src
    },
    erase: (state) => {
      state.src = null
    },
  },
})

export const { preset, update, erase } = actions
export default reducer
