import { inject, injectable } from 'inversify'

import { type CoursesRepository, CreateCourseUsecase } from '@/domain'
import { TYPES } from '@/inversify'

@injectable()
export class CreateCourseUsecaseImpl implements CreateCourseUsecase {
  constructor(@inject(TYPES.CoursesRepository) private readonly courseRepository: CoursesRepository) {}

  async execute(params: CreateCourseUsecase.Params): Promise<CreateCourseUsecase.Output> {
    try {
      const course = await this.courseRepository.createCourse(params)

      return { course }
    } catch (error) {
      throw error
    }
  }
}
