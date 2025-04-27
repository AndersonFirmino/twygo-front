import { useMutation, useQueryClient } from '@tanstack/react-query'

import { CreateCourseUsecase } from '@/domain'
import { container } from '@/inversify'
import { TYPES } from '@/inversify/types'

export const useCreateCourse = () => {
  const createCourseUsecase = container.get<CreateCourseUsecase>(TYPES.CreateCourseUsecase)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (params: CreateCourseUsecase.Params) => {
      return await createCourseUsecase.execute(params)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
    },
  })
}
