import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import cvApi from 'shared/api/cv'
import { ServiceNameEnum } from 'services'
import { Cv } from './model'

const stubBaseQuery = fetchBaseQuery({ baseUrl: 'stub' })

const shareCvApi = createApi({
  reducerPath: ServiceNameEnum.ShareCv,
  baseQuery: stubBaseQuery,
  endpoints: (builder) => ({
    getSharableCv: builder.query<Cv, string>({
      queryFn: async (id) => ({
        data: await cvApi.loadSharable(id),
      }),
    }),
  }),
})

const {
  reducer: shareCvReducer,
  middleware: shareCvMiddleware,
  useGetSharableCvQuery: useGetSharableCv,
  useLazyGetSharableCvQuery: useLazyGetSharableCv,
  endpoints,
} = shareCvApi

const useSharableCv = endpoints.getSharableCv.useQueryState

export {
  shareCvReducer,
  shareCvMiddleware,
  useGetSharableCv,
  useLazyGetSharableCv,
  useSharableCv,
}
