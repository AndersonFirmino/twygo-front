import { useMutation, useQueryClient } from '@tanstack/react-query'

import { UpdateCourseUsecase } from '@/domain'
import { container } from '@/inversify'
import { TYPES } from '@/inversify/types'

export const useUpdateCourse = () => {
  const updateCourseUsecase = container.get<UpdateCourseUsecase>(TYPES.UpdateCourseUsecase)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (params: UpdateCourseUsecase.Params) => {
      return await updateCourseUsecase.execute(params)
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      queryClient.invalidateQueries({ queryKey: ['course', variables.id] })
    },
  })
}
