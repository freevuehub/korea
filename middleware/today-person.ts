import { Context } from '@nuxt/types'
import { getTodayList } from '~/API'
import { TodayPersonConst } from '~/Constant'

export default async (context: Context) => {
  if (context.route.query.page) {
    const page = Number(context.route.query.page)
    const limit = 10

    const response = await getTodayList(page, limit)

    context.app.store?.dispatch(`todayPerson/${TodayPersonConst.$Call.List}`, response.result)
    context.app.store?.dispatch(`todayPerson/${TodayPersonConst.$Call.Count}`, response.totalCount)
  }
}
