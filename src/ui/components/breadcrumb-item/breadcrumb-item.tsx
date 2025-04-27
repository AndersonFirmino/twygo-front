import { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BreadcrumbItemProps } from './interfaces'

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ isLast, path, label }) => {
  const navigate = useNavigate()

  return (
    <ChakraBreadcrumb.Item>
      {isLast ? (
        <ChakraBreadcrumb.CurrentLink>{label}</ChakraBreadcrumb.CurrentLink>
      ) : (
        <ChakraBreadcrumb.Link onClick={() => navigate(path)} cursor="pointer">
          {label}
        </ChakraBreadcrumb.Link>
      )}
    </ChakraBreadcrumb.Item>
  )
}
