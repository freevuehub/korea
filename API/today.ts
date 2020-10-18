import endpoint from './endpoint.config'
import { AxiosGet } from './util'
import { ITodayPersonListItem } from '~/types'

export interface ITodayPersonListResponse {
  result: ITodayPersonListItem
}

export const getTodayList = async (page: number, limit: number) => {
  try {
    const params = { page, limit }

    const response = await AxiosGet<ITodayPersonListResponse>(endpoint.todayPerson.request.list(), {
      params,
    })

    return response
  } catch (err) {
    return err
  }
}
