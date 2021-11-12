import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AvatarStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: AvatarStateT = {
  src: null,
}

const { actions, reducer } = createSlice({
  name: 'avatar',
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
