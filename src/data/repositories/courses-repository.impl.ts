import { inject, injectable } from 'inversify'

import { Course, CoursesRepository, type HttpClient } from '@/domain'
import { InvalidCoursesResponseError } from '@/domain/errors/invalid-courses-response-error'
import { TYPES } from '@/inversify'

@injectable()
export class CoursesRepositoryImpl implements CoursesRepository {
  constructor(@inject(TYPES.HttpClient) private readonly httpClient: HttpClient) {}

  async getCourses(signal?: AbortSignal): Promise<Course[]> {
    const data = await this.httpClient.get<Course[]>('/courses', signal)

    this.validateResponse(data)

    return data
  }

  private validateResponse(data: Course[]) {
    if (!data) {
      throw new InvalidCoursesResponseError()
    }

    data.forEach((course) => {
      if (
        !course.id ||
        !course.title ||
        !course.description ||
        !course.end_date ||
        !course.videos_size ||
        !course.video_url
      ) {
        throw new InvalidCoursesResponseError()
      }
    })
  }
}
