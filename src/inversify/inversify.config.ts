import { Container } from 'inversify'

import { CoursesRepositoryImpl, GetCoursesUsecaseImpl } from '@/data'
import { HttpClient, CoursesRepository } from '@/domain'
import { AxiosHttpClient } from '@/infra'
import { TYPES } from '@/inversify/types'

const container = new Container()

container.bind<HttpClient>(TYPES.HttpClient).to(AxiosHttpClient)
container.bind<CoursesRepository>(TYPES.CoursesRepository).to(CoursesRepositoryImpl)
container.bind<GetCoursesUsecaseImpl>(TYPES.GetCoursesUsecase).to(GetCoursesUsecaseImpl)

export { container }
