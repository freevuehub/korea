import endpoint from './endpoint.config'
import { AxiosGet } from './util'
import { IPersonDetail } from '~/types'

interface IPersonItemResponse {
  result: IPersonDetail
}

export const getPersonItem = async (id: number) => {
  try {
    const response = await AxiosGet<IPersonItemResponse>(endpoint.person.request.item(id), {})

    return response
  } catch (err) {
    return err
  }
}
