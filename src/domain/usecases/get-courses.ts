import { Course } from '@/domain/models'

export interface GetCourses {
  execute(signal?: AbortSignal): Promise<GetCourses.Output>
}

export namespace GetCourses {
  export interface Output {
    courses: Course[]
  }
}
