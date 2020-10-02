import endpoint from './endpoint.config'
import { AxiosGet } from './util'

export interface IHunkukListResponse {
  result: {
    id: number
    name: string
  }
}

export const getHunkukList = async () => {
  try {
    const response = await AxiosGet<IHunkukListResponse>(endpoint.hunkuk.request.list(), {})

    return response
  } catch (err) {
    return err
  }
}
