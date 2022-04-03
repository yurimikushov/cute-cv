import { AnyAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading } from './selectors'
import { loadAll, load, LoadAllResult, LoadResult } from './thunks'

const useIsCVLoading = () => {
  const isCVLoading = useSelector(selectIsLoading)

  return {
    isCVLoading,
  }
}

const useLoadAllCV = () => {
  const dispatch = useDispatch()

  const handleLoadAllCv = () => {
    return dispatch(
      loadAll() as unknown as AnyAction
    ).unwrap() as unknown as Promise<LoadAllResult>
  }

  return handleLoadAllCv
}

const useLoadCV = () => {
  const dispatch = useDispatch()

  const handleLoadCv = (id: string) => {
    return dispatch(
      load(id) as unknown as AnyAction
    ).unwrap() as unknown as Promise<LoadResult>
  }

  return handleLoadCv
}

export { useLoadAllCV, useLoadCV, useIsCVLoading }
