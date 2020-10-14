import { Context } from '@nuxt/types'
import { getHunkukList, getWorkList, getPersonList } from '~/API'
import { HunkukConst, PersonConst, WorkConst } from '~/Constant'

export default async (context: Context) => {
  const hunkukList = context.app.store?.getters[`hunkuk/${HunkukConst.$Get.List}`]
  const workList = context.app.store?.getters[`work/${WorkConst.$Get.List}`]

  if (!hunkukList.length) {
    const { result } = await getHunkukList()

    await context.app.store?.dispatch(`hunkuk/${HunkukConst.$Call.List}`, result)
  }
  if (!workList.length) {
    const { result } = await getWorkList()

    await context.app.store?.dispatch(`work/${WorkConst.$Call.List}`, result)
  }

  if (context.route.query.page) {
    const page = Number(context.route.query.page)
    const limit = 10
    const name = `${context.route.query.name || ''}`
    const hunkuk = Number(context.route.query.hunkuk || 0)
    const work = Number(context.route.query.work || 0)

    const response = await getPersonList(page, limit, name, hunkuk, work)

    await context.app.store?.dispatch(`person/${PersonConst.$Call.List}`, response)
  }
}
