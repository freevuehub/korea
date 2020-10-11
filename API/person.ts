import { IPersonDetail } from '@/types'
import endpoint from './endpoint.config'
import { AxiosGet } from './util'
// import { IPersonDetail, IPersonListResponse } from '~/types'

interface IPersonItemResponse {
  result: IPersonDetail
}

export const getPersonList = async (page: number, limit: number) => {
  try {
    const params = { page, limit }

    const response = await AxiosGet(endpoint.person.request.list(), { params })

    return response
  } catch (err) {
    return err
  }
}

export const getPersonItem = async (id: number) => {
  try {
    const response = await AxiosGet<IPersonItemResponse>(endpoint.person.request.item(id), {})

    return response
  } catch (err) {
    return err
  }
}
