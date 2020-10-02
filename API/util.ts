import instance, { AxiosResponse } from './instance'
import { IResponseData } from './type'

type IAR<R> = AxiosResponse<IResponseData<R>>

export const filterStatus = <R = any>(response: IAR<R>) => {
  if (response.data.status === 2000) {
    return Promise.resolve(response.data)
  } else {
    return Promise.reject(response)
  }
}

export const AxiosGet = async <R = any, T = any>(URL: string, params: T) => {
  try {
    const response: IAR<R> = await instance.get(URL, params)

    return filterStatus<R>(response)
  } catch (err) {
    return err
  }
}
