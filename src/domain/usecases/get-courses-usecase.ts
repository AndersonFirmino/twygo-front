import { Course } from '@/domain/models'

export interface GetCoursesUsecase {
  execute(signal?: AbortSignal): Promise<GetCoursesUsecase.Output>
}

export namespace GetCoursesUsecase {
  export interface Output {
    courses: Course[]
  }
}
