export class InvalidCoursesResponseError extends Error {
  constructor() {
    super('Invalid courses response')
    this.name = 'InvalidCoursesResponseError'
  }
}
