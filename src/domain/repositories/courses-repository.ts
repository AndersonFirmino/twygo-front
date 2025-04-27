import { Course } from '@/domain/models'

export interface CoursesRepository {
  getCourses(signal?: AbortSignal): Promise<Course[]>
  getCourse(id: number): Promise<Course>
  createCourse(course: Omit<Course, 'id' | 'created_at' | 'updated_at'>): Promise<Course>
  updateCourse(id: number, course: Partial<Omit<Course, 'id' | 'created_at' | 'updated_at'>>): Promise<Course>
  deleteCourse(id: number): Promise<void>
  getTotalVideosSize(): Promise<{ total_size: number }>
}
