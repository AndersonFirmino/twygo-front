import { Course } from '@/domain/models'

export interface GetCourseUsecase {
  execute(id: number): Promise<GetCourseUsecase.Output>
}

export namespace GetCourseUsecase {
  export interface Output {
    course: Course
  }
}
