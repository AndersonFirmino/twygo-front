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
}
