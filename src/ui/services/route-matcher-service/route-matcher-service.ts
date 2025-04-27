import { injectable } from 'inversify'

import { IRouteMatcherService } from './interfaces'

@injectable()
export class DefaultRouteMatcherService implements IRouteMatcherService {
  isDynamicSegment(segment: string): boolean {
    return !isNaN(Number(segment))
  }
}
