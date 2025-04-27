import axios, { type AxiosInstance } from 'axios'
import { injectable } from 'inversify'

import { type HttpClient } from '@/domain'

@injectable()
export class AxiosHttpClient implements HttpClient {
  private readonly axiosInstance: AxiosInstance

  constructor() {
    const baseUrl = import.meta.env.VITE_API_URL

    if (!baseUrl) {
      throw new Error('Missing environment variable: VITE_API_URL')
    }

    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    })
  }

  async get<TResponse>(url: string, signal?: AbortSignal): Promise<TResponse> {
    const response = await this.axiosInstance.get<TResponse>(url, { signal })
    return response.data
  }

  async post<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
    const response = await this.axiosInstance.post<TResponse>(url, data)
    return response.data
  }

  async put<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
    const response = await this.axiosInstance.put<TResponse>(url, data)
    return response.data
  }

  async delete<TResponse>(url: string): Promise<TResponse> {
    const response = await this.axiosInstance.delete<TResponse>(url)
    return response.data
  }
}
