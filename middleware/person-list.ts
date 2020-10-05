import { Context } from '@nuxt/types'
import { getHunkukList } from '~/API'
import { HunkukConst } from '~/Constant'

export default async (context: Context) => {
  const hunkukList = context.app.store?.getters[`hunkuk/${HunkukConst.$Get.List}`]

  if (!hunkukList.length) {
    const { result } = await getHunkukList()

    await context.app.store?.dispatch(`hunkuk/${HunkukConst.$Call.List}`, result)
  }

  console.log(context)
}
