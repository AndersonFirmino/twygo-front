import { inject, injectable } from 'inversify'

import { type CoursesRepository, GetCoursesUsecase } from '@/domain'
import { TYPES } from '@/inversify'

@injectable()
export class GetCoursesUsecaseImpl implements GetCoursesUsecase {
  constructor(@inject(TYPES.CoursesRepository) private readonly courseRepository: CoursesRepository) {}

  async execute(signal?: AbortSignal): Promise<GetCoursesUsecase.Output> {
    try {
      const courses = await this.courseRepository.getCourses(signal)

      return { courses }
    } catch {
      return { courses: [] }
    }
  }
}
