import { useLocation } from 'react-router-dom'

import { BreadcrumbItemProps, breadcrumbRoutes } from '@/ui/components'
import { container, TYPES } from '@/ui/inversify'
import { BreadcrumbGeneratorService } from '@/ui/services'

export const useBreadcrumbs = (
  translations: Record<string, string> = breadcrumbRoutes,
): BreadcrumbItemProps[] | null => {
  const location = useLocation()
  const currentPath = location.pathname
  const breadcrumbGeneratorService = container.get<BreadcrumbGeneratorService>(TYPES.BreadcrumbGeneratorService)

  return breadcrumbGeneratorService.generateBreadcrumbs(currentPath, translations)
}
