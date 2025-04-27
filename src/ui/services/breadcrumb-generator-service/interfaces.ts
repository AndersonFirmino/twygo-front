import { BreadcrumbItem } from '@/ui/components'

export interface IBreadcrumbGeneratorService {
  generateBreadcrumbs(currentPath: string, translations: Record<string, string>): BreadcrumbItem[] | null
}
