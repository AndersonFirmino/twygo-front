export interface HttpClient {
  get<TResponse>(url: string, signal?: AbortSignal): Promise<TResponse>
  post<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse>
  put<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse>
  delete<TResponse>(url: string): Promise<TResponse>
}
