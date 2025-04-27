import { Container } from 'inversify'

import { TYPES } from '@/ui/inversify/types'
import { BreadcrumbGeneratorService, DefaultRouteMatcherService, IRouteMatcherService } from '@/ui/services'

const container = new Container()

container.bind<IRouteMatcherService>(TYPES.RouteMatcherService).to(DefaultRouteMatcherService)
container.bind<BreadcrumbGeneratorService>(TYPES.BreadcrumbGeneratorService).to(BreadcrumbGeneratorService)

export { container }
