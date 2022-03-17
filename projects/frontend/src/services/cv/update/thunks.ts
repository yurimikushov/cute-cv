import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { UpdatePayload } from './model'

const update = createAsyncThunk(
  `${ServiceNameEnum.cv}/update`,
  async (payload: UpdatePayload) => {
    const metadata = await cvApi.update(payload)
    return metadata
  }
)

type UpdateResult = NonNullable<Awaited<ReturnType<typeof cvApi.update>>>

export { update }
export type { UpdatePayload, UpdateResult }
