import { createBrowserHistory } from 'history'
import React from 'react'

import { Core } from '@/ui/app/core'

const Bootstrap: React.FC = () => {
  const history = createBrowserHistory()

  return <Core history={history} />
}

export default Bootstrap
