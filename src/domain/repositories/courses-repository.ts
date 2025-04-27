import { Course } from '@/domain/models'

export interface CoursesRepository {
  getCourses(signal?: AbortSignal): Promise<Course[]>
}
