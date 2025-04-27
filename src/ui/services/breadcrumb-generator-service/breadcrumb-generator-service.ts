import { inject, injectable } from 'inversify'

import { BreadcrumbItemProps } from '@/ui/components'
import { TYPES } from '@/ui/inversify'

import { type IRouteMatcherService } from '../route-matcher-service'
import { type IBreadcrumbGeneratorService } from './interfaces'

@injectable()
export class BreadcrumbGeneratorService implements IBreadcrumbGeneratorService {
  constructor(@inject(TYPES.RouteMatcherService) private readonly routeMatcherService: IRouteMatcherService) {}

  generateBreadcrumbs(currentPath: string, translations: Record<string, string>): BreadcrumbItemProps[] | null {
    const pathSegments = currentPath.split('/').filter(Boolean)
    if (pathSegments.length === 0) return null

    const nonDynamicSegments = pathSegments.filter((segment) => !this.routeMatcherService.isDynamicSegment(segment))
    if (nonDynamicSegments.length === 0) return null

    const breadcrumbs: BreadcrumbItemProps[] = []
    let currentPathBuilder = ''

    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i]
      currentPathBuilder += `/${segment}`

      const isDynamicSegment = this.routeMatcherService.isDynamicSegment(segment)

      if (isDynamicSegment) {
        continue
      }

      const label = translations[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
      const isLastNonDynamicSegment = segment === nonDynamicSegments[nonDynamicSegments.length - 1]

      breadcrumbs.push({
        path: currentPathBuilder,
        label,
        isLast: isLastNonDynamicSegment,
      })
    }

    return breadcrumbs
  }
}
