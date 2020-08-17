import axios from 'axios'
import endpoint from './endpoint.config'
import { IPersonItem, IPersonDetail } from '~/types'

interface IApiSuccessCode {
  status: number
}

interface IPerconListResponse extends IApiSuccessCode {
  result: IPersonItem[]
  totalCount: number
}

interface IPerconItemResponse extends IApiSuccessCode {
  result: IPersonDetail
}

export const getPersonList = (page: number, limit: number): Promise<IPerconListResponse> =>
  new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const params = { page, limit }

        const response = await axios.get(endpoint.person.request.list(), { params })

        if (response.data.status === 2000) {
          resolve(response.data)
        } else {
          reject(response)
        }
      } catch (err) {
        reject(err)
      }
    })()
  })

export const getPersonItem = (id: number): Promise<IPerconItemResponse> =>
  new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const response = await axios.get(endpoint.person.request.item(id))

        if (response.data.status === 2000) {
          resolve(response.data)
        } else {
          reject(response)
        }
      } catch (err) {
        reject(err)
      }
    })()
  })

export const putPersonClickCount = (id: number, clickCount: number): Promise<IPerconItemResponse> =>
  new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const response = await axios.put(endpoint.person.request.item(id), { clickCount })

        if (response.data.status === 2000) {
          resolve(response.data)
        } else {
          reject(response)
        }
      } catch (err) {
        reject(err)
      }
    })()
  })
