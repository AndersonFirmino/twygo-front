import { inject, injectable } from 'inversify'

import { type CoursesRepository, GetCourseUsecase } from '@/domain'
import { TYPES } from '@/inversify'

@injectable()
export class GetCourseUsecaseImpl implements GetCourseUsecase {
  constructor(@inject(TYPES.CoursesRepository) private readonly courseRepository: CoursesRepository) {}

  async execute(id: number): Promise<GetCourseUsecase.Output> {
    const course = await this.courseRepository.getCourse(id)

    return { course }
  }
}
