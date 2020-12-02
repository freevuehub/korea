import endpoint from './endpoint.config'
import { AxiosGet } from './util'

export const getHistoryEventItem = async (id: number) => {
  try {
    const response = await AxiosGet<any>(endpoint.historyEvent.request.item(id), {})

    return response
  } catch (err) {
    return err
  }
}
