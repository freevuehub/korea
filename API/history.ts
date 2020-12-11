import endpoint from './endpoint.config'
import { AxiosGet } from './util'

interface IGetListParams {
  month: number
  year: number
}

export const getHistoryEventList = async (params: IGetListParams) => {
  try {
    const response = await AxiosGet<any>(endpoint.historyEvent.request.list(), { params })

    return response
  } catch (err) {
    return err
  }
}

export const getHistoryEventItem = async (id: number) => {
  try {
    const response = await AxiosGet<any>(endpoint.historyEvent.request.item(id), {})

    return response
  } catch (err) {
    return err
  }
}
