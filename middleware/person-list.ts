import { Context } from '@nuxt/types'
import { getHunkukList, getPersonList } from '~/API'
import { HunkukConst, PersonConst } from '~/Constant'

export default async (context: Context) => {
  const hunkukList = context.app.store?.getters[`hunkuk/${HunkukConst.$Get.List}`]

  if (!hunkukList.length) {
    const { result } = await getHunkukList()

    await context.app.store?.dispatch(`hunkuk/${HunkukConst.$Call.List}`, result)
  }

  if (context.route.query.page) {
    const response = await getPersonList(Number(context.route.query.page), 10)

    await context.app.store?.dispatch(`person/${PersonConst.$Call.List}`, response)
  }
}
