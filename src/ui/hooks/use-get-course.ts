import { useQuery } from '@tanstack/react-query'

import { GetCourseUsecase } from '@/domain'
import { container } from '@/inversify'
import { TYPES } from '@/inversify/types'

export const useGetCourse = (id: number) => {
  const getCourseUsecase = container.get<GetCourseUsecase>(TYPES.GetCourseUsecase)

  return useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      try {
        return await getCourseUsecase.execute(id)
      } catch (error) {
        throw error
      }
    },
    enabled: !!id,
  })
}
