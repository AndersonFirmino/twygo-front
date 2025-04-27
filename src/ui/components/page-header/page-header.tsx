import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import { PageHeaderProps } from './interfaces'

const PageHeader: React.FC<PageHeaderProps> = ({ title, actionButton }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={6}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      {actionButton && (
        <Button colorScheme="blue" onClick={actionButton.onClick}>
          {actionButton.label}
        </Button>
      )}
    </Flex>
  )
}

export default PageHeader
