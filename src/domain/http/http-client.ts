export interface HttpClient {
  get<TResponse>(url: string, signal?: AbortSignal): Promise<TResponse>
}
