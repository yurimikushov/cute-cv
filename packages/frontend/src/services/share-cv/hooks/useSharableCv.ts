import { useQuery } from '@tanstack/react-query'
import cvApi from 'shared/api/cv'

const useGetSharableCv = (id: string) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['cv', id],
    queryFn: ({ signal }) => {
      return cvApi.loadSharable(id, { signal })
    },
    refetchOnWindowFocus: false,
  })

  return {
    isLoading,
    data,
    error,
  }
}

export default useGetSharableCv
