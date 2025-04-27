import { Course } from '@/domain/models'

export interface UpdateCourseUsecase {
  execute(params: UpdateCourseUsecase.Params): Promise<UpdateCourseUsecase.Output>
}

export namespace UpdateCourseUsecase {
  export interface Params {
    id: number
    title?: string
    description?: string
    end_date?: string
    videos_size?: number
    video_url?: string
  }

  export interface Output {
    course: Course
  }
}
