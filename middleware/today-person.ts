import { Context } from '@nuxt/types'
import { getTodayList } from '~/API'
import { TodayPersonConst } from '~/Constant'

export default async (context: Context) => {
  if (context.route.query.page) {
    const page = Number(context.route.query.page)
    const limit = 10
    const count = context.app.store?.getters[`todayPerson/${TodayPersonConst.$Get.Count}`]

    if (!count) {
      const { result, totalCount } = await getTodayList(page, limit)

      context.app.store?.dispatch(`todayPerson/${TodayPersonConst.$Call.List}`, result)
      context.app.store?.dispatch(`todayPerson/${TodayPersonConst.$Call.Count}`, totalCount)
    }
  }
}
