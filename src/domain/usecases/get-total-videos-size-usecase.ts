export interface GetTotalVideosSizeUsecase {
  execute(): Promise<GetTotalVideosSizeUsecase.Output>
}

export namespace GetTotalVideosSizeUsecase {
  export interface Output {
    total_size: number
  }
}
