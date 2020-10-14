import endpoint from './endpoint.config'
import { AxiosGet } from './util'
import { IWorkListItem } from '~/types'

export interface IWorkListResponse {
  result: IWorkListItem[]
}

export const getWorkList = async () => {
  try {
    const response = await AxiosGet<IWorkListResponse>(endpoint.work.request.list(), {})

    return response
  } catch (err) {
    return err
  }
}
