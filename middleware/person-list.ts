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
    const page = Number(context.route.query.page)
    const limit = 10
    const name = context.route.query.name || ''
    const hunkuk = Number(context.route.query.hunkuk || 0)

    const response = await getPersonList(page, limit, name, hunkuk)

    await context.app.store?.dispatch(`person/${PersonConst.$Call.List}`, response)
  }
}
