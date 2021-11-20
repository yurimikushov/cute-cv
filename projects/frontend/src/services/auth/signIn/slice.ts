import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { AuthStateT, SetUserPayloadT } from './model'

const initialState: AuthStateT = {
  user: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.auth}`,
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<SetUserPayloadT>) => {
      state.user = payload.user
    },
    resetUser: (state) => {
      state.user = null
    },
  },
})

export const { setUser, resetUser } = actions
export default reducer
