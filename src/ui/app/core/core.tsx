import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import React from 'react'

import { Router } from '@/ui/router'

import { CoreProps } from './interfaces'

const Core: React.FC<CoreProps> = ({ history }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router history={history} />
    </ChakraProvider>
  )
}

export default Core
