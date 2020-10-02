import axios from 'axios'
import endpoint from './endpoint.config'
import { IPersonItem, IPersonDetail, ISourceDetail } from '~/types'

interface IApiSuccessCode {
  status: number
}

interface IMainItemResponse extends IApiSuccessCode {
  todayAddPerson: IPersonItem[]
  todayPerson: IPersonDetail
}

interface IPersonListResponse extends IApiSuccessCode {
  result: IPersonItem[]
  totalCount: number
}

interface IPersonItemResponse extends IApiSuccessCode {
  result: IPersonDetail
}

interface ISourceItemResponse extends IApiSuccessCode {
  result: ISourceDetail
}

export const getMainData = (): Promise<IMainItemResponse> =>
  new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const response = await axios.get(endpoint.main.request.item())

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

export const getPersonList = (page: number, limit: number): Promise<IPersonListResponse> =>
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

export const getPersonItem = (id: number): Promise<IPersonItemResponse> =>
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

export const getSourceDetail = (id: number): Promise<ISourceItemResponse> =>
  new Promise((resolve, reject) => {
    ;(async () => {
      try {
        const response = await axios.get(endpoint.source.request.item(id))

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

export * from './hunkuk'
