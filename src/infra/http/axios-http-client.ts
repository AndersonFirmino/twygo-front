import axios from 'axios'
import { injectable } from 'inversify'

import { type HttpClient } from '@/domain'

@injectable()
export class AxiosHttpClient implements HttpClient {
  async get<TResponse>(url: string, signal?: AbortSignal): Promise<TResponse> {
    const response = await axios.get<TResponse>(url, { signal })
    return response.data
  }
}
