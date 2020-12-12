import { Context } from '@nuxt/types'
import { HistoryConst } from '~/Constant'

export default async (context: Context) => {
  await context.store.dispatch(`history/${HistoryConst.$Call.Detail}`, Number(context.params.id))
}
