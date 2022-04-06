import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { AddPayload } from './model'

const add = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/add`,
  async ({ name, number, allowShare, cv }: AddPayload) => {
    const metadata = await cvApi.add({ name, number, allowShare, cv })
    return metadata
  }
)

export { add }
export type { AddPayload }
