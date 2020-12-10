import { Context } from '@nuxt/types'
import { getHistoryEventList } from '~/API'

export default async (context: Context) => {
  const response = await getHistoryEventList(1)

  console.log(response)
}
