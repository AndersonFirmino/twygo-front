import { inject, injectable } from 'inversify'

import { type CoursesRepository, DeleteCourseUsecase } from '@/domain'
import { TYPES } from '@/inversify'

@injectable()
export class DeleteCourseUsecaseImpl implements DeleteCourseUsecase {
  constructor(@inject(TYPES.CoursesRepository) private readonly courseRepository: CoursesRepository) {}

  async execute(id: number): Promise<void> {
    await this.courseRepository.deleteCourse(id)
  }
}
