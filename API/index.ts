import axios from 'axios'
import endpoint from './endpoint.config'
import { IPersonListItem, IPersonDetail, ISourceDetail } from '~/types'

interface IApiSuccessCode {
  status: number
}

interface IMainItemResponse extends IApiSuccessCode {
  todayAddPerson: IPersonListItem[]
  todayPerson: IPersonDetail
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

export * from './person'
export * from './hunkuk'
export * from './work'
