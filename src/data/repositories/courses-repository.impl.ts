import { inject, injectable } from 'inversify'

import { Course, CoursesRepository, type HttpClient, VideosSizeReport } from '@/domain'
import { InvalidCoursesResponseError } from '@/domain/errors/invalid-courses-response-error'
import { TYPES } from '@/inversify'

@injectable()
export class CoursesRepositoryImpl implements CoursesRepository {
  constructor(@inject(TYPES.HttpClient) private readonly httpClient: HttpClient) {}

  async getCourses(signal?: AbortSignal): Promise<Course[]> {
    const data = await this.httpClient.get<Course[]>('/courses', signal)

    this.validateResponseArray(data)

    return data
  }

  async getCourse(id: number): Promise<Course> {
    const data = await this.httpClient.get<Course>(`/courses/${id}`)

    this.validateResponseSingle(data)

    return data
  }

  async createCourse(course: Omit<Course, 'id' | 'created_at' | 'updated_at'>): Promise<Course> {
    const payload = { course }
    const data = await this.httpClient.post<typeof payload, Course>('/courses', payload)

    this.validateResponseSingle(data)

    return data
  }

  async updateCourse(id: number, course: Partial<Omit<Course, 'id' | 'created_at' | 'updated_at'>>): Promise<Course> {
    const payload = { course }
    const data = await this.httpClient.put<typeof payload, Course>(`/courses/${id}`, payload)

    this.validateResponseSingle(data)

    return data
  }

  async deleteCourse(id: number): Promise<void> {
    await this.httpClient.delete<void>(`/courses/${id}`)
  }

  async getTotalVideosSize(): Promise<VideosSizeReport> {
    return this.httpClient.get<VideosSizeReport>('/reports/videos_size')
  }

  private validateResponseArray(data: Course[]) {
    if (!data) {
      throw new InvalidCoursesResponseError()
    }

    data.forEach(this.validateCourse)
  }

  private validateResponseSingle(data: Course) {
    if (!data) {
      throw new InvalidCoursesResponseError()
    }

    this.validateCourse(data)
  }

  private validateCourse(course: Course) {
    if (!course.id || !course.title || !course.description || !course.end_date || !course.videos_size) {
      throw new InvalidCoursesResponseError()
    }
  }
}
