import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import * as con from './constant'
class NiuRequest {
  instance
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.response.use((res) => {
      console.log(res, 'res')

      return res.data.data
    })
    this.instance.interceptors.request.use((config) => {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
      return config
    })
  }
  request<T>(config: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }
  patch<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
  delete<T>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}
export const Niureq = new NiuRequest(con.BASEURL, con.TIMEOUT)
