import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import { Toaster } from '@/ui/components'
import { Router } from '@/ui/router'

import { CoreProps } from './interfaces'

const queryClient = new QueryClient()

const Core: React.FC<CoreProps> = ({ history }) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <QueryClientProvider client={queryClient}>
        <Router history={history} />
        <Toaster />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default Core
