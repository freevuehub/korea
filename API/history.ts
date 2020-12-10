import endpoint from './endpoint.config'
import { AxiosGet } from './util'

export const getHistoryEventList = async (month: number) => {
  try {
    console.log(month)
    const response = await AxiosGet<any>(endpoint.historyEvent.request.list(), { params: { month } })

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
