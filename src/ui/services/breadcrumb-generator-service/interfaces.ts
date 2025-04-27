import { BreadcrumbItemProps } from '@/ui/components'

export interface IBreadcrumbGeneratorService {
  generateBreadcrumbs(currentPath: string, translations: Record<string, string>): BreadcrumbItemProps[] | null
}
