import { Context } from '@nuxt/types'
import { getPersonItem } from '~/API'
import { PersonConst } from '~/Constant'

export default async (context: Context) => {
  const { result } = await getPersonItem(Number(context.params.id))

  await context.app.store?.dispatch(`person/${PersonConst.$Call.Item}`, result)
}
