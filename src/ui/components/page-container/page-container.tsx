import { Container } from '@chakra-ui/react'
import React from 'react'

import { PageContainerProps } from './interfaces'

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Container maxW="container.xl" py={5}>
      {children}
    </Container>
  )
}

export default PageContainer
