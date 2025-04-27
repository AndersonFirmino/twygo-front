import { useRef } from 'react'

import { AbortManager } from '@/infra'

export const useAbortManager = () => {
  const abortManagerRef = useRef<AbortManager>(new AbortManager())

  const startRequest = () => {
    return abortManagerRef.current.startRequest()
  }

  const isAborted = () => {
    return abortManagerRef.current.isAborted()
  }

  const clear = () => {
    abortManagerRef.current.clear()
  }

  return {
    startRequest,
    isAborted,
    clear,
  }
}
