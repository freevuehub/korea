import { Context } from '@nuxt/types'
import { getMainData } from '~/API'
import { MainConst } from '~/Constant'

export default async (context: Context) => {
  const { todayAddPerson, todayPerson } = await getMainData()

  await context.app.store?.dispatch(`main/${MainConst.$Call.Item}`, { todayAddPerson, todayPerson })
}
