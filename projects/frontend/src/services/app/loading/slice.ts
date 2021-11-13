import { createSlice } from '@reduxjs/toolkit'
import { LoadingStateT } from './model'

const initialState: LoadingStateT = {
  loading: true,
}

const { actions, reducer } = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    begin: (state) => {
      state.loading = true
    },
    complete: (state) => {
      state.loading = false
    },
  },
})

export const { begin, complete } = actions
export default reducer
