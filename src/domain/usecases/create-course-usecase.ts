import { Course } from '@/domain/models'

export interface CreateCourseUsecase {
  execute(params: CreateCourseUsecase.Params): Promise<CreateCourseUsecase.Output>
}

export namespace CreateCourseUsecase {
  export interface Params {
    title: string
    description: string
    end_date: string
    videos_size: number
    video_url: string
  }

  export interface Output {
    course: Course
  }
}
