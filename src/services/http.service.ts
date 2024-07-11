import axios, { AxiosInstance, AxiosResponse } from 'axios';

class HttpService {

  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public get<T>(
    url: string,
    params: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {

    return this.client.get(url, { params })
  }

  public post<T>(
    url: string,
    data: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {

    return this.client.post(url, data)
  }

  public put<T>(
    url: string,
    data: Record<string, unknown> = {}
  ): Promise<AxiosResponse<T>> {

    return this.client.put(url, data)
  }

  public delete<T>(url: string): Promise<T> {
    return this.client.delete(url)
  }


}

export const httpService = new HttpService();