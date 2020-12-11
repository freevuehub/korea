import { Context } from '@nuxt/types'
import { HistoryConst } from '~/Constant'
import dayjs from 'dayjs'

export default async (context: Context) => {
  const params = {
    month: Number(context.params.month || dayjs().month() + 1),
    year: Number(context.params.year ||  dayjs().year()),
  }

  await context.store.dispatch(`history/${HistoryConst.$Call.List}`, params)
}
