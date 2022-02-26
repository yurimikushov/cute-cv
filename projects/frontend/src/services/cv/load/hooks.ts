import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading } from './selectors'
import { loadAll, load, LoadResult } from './thunks'

const useIsCVLoading = () => {
  const isCVLoading = useSelector(selectIsLoading)

  return {
    isCVLoading,
  }
}

const useLoadAllCV = () => {
  const dispatch = useDispatch()

  const handleLoadAllCv = () => {
    dispatch(loadAll())
  }

  return handleLoadAllCv
}

const useLoadCV = () => {
  const dispatch = useDispatch()

  const handleLoadCv = (id: string) => {
    return (
      dispatch(load(id))
        // @ts-expect-error bad typing
        .unwrap() as unknown as Promise<LoadResult>
    )
  }

  return handleLoadCv
}

export { useLoadAllCV, useLoadCV, useIsCVLoading }
