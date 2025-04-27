export class AbortManager {
  private controller: AbortController | null = null

  startRequest(): AbortSignal {
    if (this.controller) {
      this.controller.abort()
    }

    this.controller = new AbortController()
    return this.controller.signal
  }

  isAborted(): boolean {
    return this.controller ? this.controller.signal.aborted : false
  }

  clear(): void {
    this.controller = null
  }
}
