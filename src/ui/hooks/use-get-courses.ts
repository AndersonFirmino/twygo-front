import { useQuery } from '@tanstack/react-query'

import { GetCoursesUsecase } from '@/domain'
import { container } from '@/inversify'
import { TYPES } from '@/inversify/types'

import { useAbortManager } from './use-abort-manager'

export const useGetCourses = () => {
  const getCoursesUsecase = container.get<GetCoursesUsecase>(TYPES.GetCoursesUsecase)
  const abortManager = useAbortManager()

  return useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      const signal = abortManager.startRequest()
      try {
        const result = await getCoursesUsecase.execute(signal)

        if (abortManager.isAborted()) {
          return { courses: [] }
        }

        return result
      } catch (error) {
        if (abortManager.isAborted()) {
          return { courses: [] }
        }

        throw error
      }
    },
  })
}
