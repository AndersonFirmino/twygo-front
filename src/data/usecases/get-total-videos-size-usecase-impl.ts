import { inject, injectable } from 'inversify'

import { type CoursesRepository, GetTotalVideosSizeUsecase } from '@/domain'
import { TYPES } from '@/inversify'

@injectable()
export class GetTotalVideosSizeUsecaseImpl implements GetTotalVideosSizeUsecase {
  constructor(@inject(TYPES.CoursesRepository) private readonly courseRepository: CoursesRepository) {}

  async execute(): Promise<GetTotalVideosSizeUsecase.Output> {
    try {
      return await this.courseRepository.getTotalVideosSize()
    } catch (error) {
      throw error
    }
  }
}
