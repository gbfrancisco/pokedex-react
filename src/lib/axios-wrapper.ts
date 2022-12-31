import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IAxiosClient {
  get<TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse>;

  delete<TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse>;

  post<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;

  put<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;

  patch<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse>;
}

export default class AxiosClient implements IAxiosClient {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = this.createAxiosClient();
  }

  private createAxiosClient(): AxiosInstance {
    // TODO: Create constants file/directory
    return Axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // TODO: Create actual handleServiceError
  private handleServiceError(httpReq: string, error: unknown) {
    console.log(`${httpReq.toUpperCase()} ERROR: ${error}`);
  }

  async get<TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse> {
    try {
      const response = config
        ? await this.axiosClient.get<TResponse>(url, config)
        : await this.axiosClient.get<TResponse>(url);
      return response.data;
    } catch (error) {
      this.handleServiceError('GET', error);
    }
    return {} as TResponse;
  }

  async post<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = config
        ? await Axios.post<TResponse>(url, data, config)
        : await Axios.post<TResponse>(url, data);
      return response.data;
    } catch (error) {
      this.handleServiceError('POST', error);
    }
    return {} as TResponse;
  }

  async put<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = config
        ? await Axios.put<TResponse>(url, data, config)
        : await Axios.put<TResponse>(url, data);
      return response.data;
    } catch (error) {
      this.handleServiceError('POST', error);
    }
    return {} as TResponse;
  }

  async patch<TRequest, TResponse>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig,
  ): Promise<TResponse> {
    try {
      const response = config
        ? await Axios.patch<TResponse>(url, data, config)
        : await Axios.patch<TResponse>(url, data);
      return response.data;
    } catch (error) {
      this.handleServiceError('POST', error);
    }
    return {} as TResponse;
  }

  async delete<TResponse>(url: string, config?: AxiosRequestConfig): Promise<TResponse> {
    try {
      const response = config
        ? await this.axiosClient.delete<TResponse>(url, config)
        : await this.axiosClient.delete<TResponse>(url);
      return response.data;
    } catch (error) {
      this.handleServiceError('DELETE', error);
    }
    return {} as TResponse;
  }
}
