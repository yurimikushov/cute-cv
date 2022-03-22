import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { UserState, SetUserPayload } from './model'

const initialState: UserState = {
  user: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.Auth}/user`,
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<SetUserPayload>) => {
      state.user = payload.user
    },
    reset: (state) => {
      state.user = null
    },
  },
})

export const { set, reset } = actions
export default reducer
