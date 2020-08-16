import axios from 'axios'
import endpoint from './endpoint.config'

interface IApiSuccessCode {
  status: number
}

interface IPerconListResponse extends IApiSuccessCode {
  result: any[]
  totalCount: number
}

export const getPersonList = (page: number, limit: number): Promise<IPerconListResponse> =>
  new Promise(async (resolve, reject) => {
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
  })
