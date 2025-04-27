import { inject, injectable } from 'inversify'

import { type CoursesRepository, UpdateCourseUsecase } from '@/domain'
import { TYPES } from '@/inversify'

@injectable()
export class UpdateCourseUsecaseImpl implements UpdateCourseUsecase {
  constructor(@inject(TYPES.CoursesRepository) private readonly courseRepository: CoursesRepository) {}

  async execute(params: UpdateCourseUsecase.Params): Promise<UpdateCourseUsecase.Output> {
    try {
      const { id, ...courseData } = params
      const course = await this.courseRepository.updateCourse(id, courseData)

      return { course }
    } catch (error) {
      throw error
    }
  }
}
