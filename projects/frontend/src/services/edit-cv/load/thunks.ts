import { createAsyncThunk } from '@reduxjs/toolkit'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
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

type LoadAllResult = NonNullable<Awaited<ReturnType<typeof cvApi.loadAll>>>
type LoadResult = NonNullable<Awaited<ReturnType<typeof cvApi.load>>>

export { loadAll, load }
export type { LoadAllResult, LoadResult }