import { createAsyncThunk } from '@reduxjs/toolkit'
import isNull from 'lodash/isNull'
import cvApi from 'shared/api/cv'
import { ServiceNameEnum } from 'services'

const loadAll = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/loadAll`,
  async () => {
    const allCv = await cvApi.loadAll()
    return allCv
  }
)

const load = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/load`,
  async (id: string, { rejectWithValue }) => {
    const cv = await cvApi.load(id)

    if (isNull(cv)) {
      throw rejectWithValue({ isEmpty: true })
    }

    return cv
  }
)

export { loadAll, load }
