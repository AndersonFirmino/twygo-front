import { Container } from 'inversify'

import {
  CoursesRepositoryImpl,
  GetCoursesUsecaseImpl,
  GetCourseUsecaseImpl,
  CreateCourseUsecaseImpl,
  UpdateCourseUsecaseImpl,
  DeleteCourseUsecaseImpl,
  GetTotalVideosSizeUsecaseImpl,
} from '@/data'
import {
  HttpClient,
  CoursesRepository,
  GetCoursesUsecase,
  GetCourseUsecase,
  CreateCourseUsecase,
  UpdateCourseUsecase,
  DeleteCourseUsecase,
  GetTotalVideosSizeUsecase,
} from '@/domain'
import { AxiosHttpClient } from '@/infra'
import { TYPES } from '@/inversify/types'

const container = new Container()

container.bind<HttpClient>(TYPES.HttpClient).to(AxiosHttpClient)
container.bind<CoursesRepository>(TYPES.CoursesRepository).to(CoursesRepositoryImpl)
container.bind<GetCoursesUsecase>(TYPES.GetCoursesUsecase).to(GetCoursesUsecaseImpl)
container.bind<GetCourseUsecase>(TYPES.GetCourseUsecase).to(GetCourseUsecaseImpl)
container.bind<CreateCourseUsecase>(TYPES.CreateCourseUsecase).to(CreateCourseUsecaseImpl)
container.bind<UpdateCourseUsecase>(TYPES.UpdateCourseUsecase).to(UpdateCourseUsecaseImpl)
container.bind<DeleteCourseUsecase>(TYPES.DeleteCourseUsecase).to(DeleteCourseUsecaseImpl)
container.bind<GetTotalVideosSizeUsecase>(TYPES.GetTotalVideosSizeUsecase).to(GetTotalVideosSizeUsecaseImpl)

export { container }
