import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { AddPayload } from './model'

const add = createAsyncThunk(
  `${ServiceNameEnum.cv}/add`,
  async ({ name, number, cv }: AddPayload) => {
    const metadata = await cvApi.add({ name, number, cv })
    return metadata
  }
)

type AddResult = NonNullable<Awaited<ReturnType<typeof cvApi.add>>>

export { add }
export type { AddPayload, AddResult }
