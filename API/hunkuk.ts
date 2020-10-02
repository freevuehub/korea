import endpoint from './endpoint.config'
import { AxiosGet } from './util'
import { IHunkukListItem } from '~/types'

export interface IHunkukListResponse {
  result: IHunkukListItem[]
}

export const getHunkukList = async () => {
  try {
    const response = await AxiosGet<IHunkukListResponse>(endpoint.hunkuk.request.list(), {})

    return response
  } catch (err) {
    return err
  }
}
