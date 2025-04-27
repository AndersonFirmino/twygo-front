import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react'
import React from 'react'

import { useBreadcrumbs } from '@/ui/hooks'

import { BreadcrumbItem } from '../breadcrumb-item'

const Breadcrumb: React.FC = () => {
  const breadcrumbs = useBreadcrumbs()

  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null
  }

  return (
    <ChakraBreadcrumb.Root mb={4}>
      <ChakraBreadcrumb.List>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.path}>
            <BreadcrumbItem {...breadcrumb} />
            {index < breadcrumbs.length - 1 && <ChakraBreadcrumb.Separator />}
          </React.Fragment>
        ))}
      </ChakraBreadcrumb.List>
    </ChakraBreadcrumb.Root>
  )
}

export default Breadcrumb
