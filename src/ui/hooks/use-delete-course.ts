import { useMutation, useQueryClient } from '@tanstack/react-query'

import { DeleteCourseUsecase } from '@/domain'
import { container } from '@/inversify'
import { TYPES } from '@/inversify/types'

export const useDeleteCourse = () => {
  const deleteCourseUsecase = container.get<DeleteCourseUsecase>(TYPES.DeleteCourseUsecase)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await deleteCourseUsecase.execute(id)
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
      queryClient.removeQueries({ queryKey: ['course', id] })
    },
  })
}
