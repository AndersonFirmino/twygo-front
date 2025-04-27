import { Container } from 'inversify'

import { HttpClient } from '@/domain'
import { AxiosHttpClient } from '@/infra'
import { TYPES } from '@/inversify/types'

const container = new Container()

container.bind<HttpClient>(TYPES.HttpClient).to(AxiosHttpClient)

export { container }
