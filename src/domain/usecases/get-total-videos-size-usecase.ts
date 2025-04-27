import { VideosSizeReport } from '@/domain/models'

export interface GetTotalVideosSizeUsecase {
  execute(): Promise<GetTotalVideosSizeUsecase.Output>
}

export namespace GetTotalVideosSizeUsecase {
  export type Output = VideosSizeReport
}
