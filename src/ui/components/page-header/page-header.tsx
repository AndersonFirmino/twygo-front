import { Button, Flex, Heading, HStack } from '@chakra-ui/react'
import React from 'react'

import { PageHeaderProps } from './interfaces'

const PageHeader: React.FC<PageHeaderProps> = ({ title, actionButton, secondaryButton }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={6}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <HStack>
        {secondaryButton && (
          <Button colorScheme="teal" onClick={secondaryButton.onClick}>
            {secondaryButton.label}
          </Button>
        )}
        {actionButton && (
          <Button colorScheme="blue" onClick={actionButton.onClick}>
            {actionButton.label}
          </Button>
        )}
      </HStack>
    </Flex>
  )
}

export default PageHeader
