import { useQuery } from '@tanstack/react-query'

import { GetTotalVideosSizeUsecase } from '@/domain'
import { container } from '@/inversify'
import { TYPES } from '@/inversify/types'

export const useGetTotalVideosSize = () => {
  const getTotalVideosSizeUsecase = container.get<GetTotalVideosSizeUsecase>(TYPES.GetTotalVideosSizeUsecase)

  return useQuery({
    queryKey: ['videos_size'],
    queryFn: async () => {
      try {
        return await getTotalVideosSizeUsecase.execute()
      } catch (error) {
        throw error
      }
    },
  })
}
