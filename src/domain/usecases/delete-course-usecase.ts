export interface DeleteCourseUsecase {
  execute(id: number): Promise<void>
}
