import { Context } from '@nuxt/types'
import { getMainData, getHistoryEventItem } from '~/API'
import { MainConst, HistoryConst } from '~/Constant'

export default async (context: Context) => {
  const { todayAddPerson, todayPerson } = await getMainData()
  const { result } = await getHistoryEventItem(42)

  await context.app.store?.dispatch(`main/${MainConst.$Call.Item}`, { todayAddPerson, todayPerson })
  await context.app.store?.dispatch(`history/${HistoryConst.$Call.Item}`, result)
}
