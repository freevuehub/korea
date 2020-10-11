import { reactive, computed, SetupContext } from '@vue/composition-api'
import { HunkukConst } from '~/Constant'

interface IState {
  searchText: string
  hunkukFilterId: number
}

export const useState = (context: SetupContext) =>
  reactive({
    searchText: context.root.$route.query.name || '',
    hunkukFilterId: Number(context.root.$route.query.hunkuk || 0),
  })

export const useComputed = (context: SetupContext) => ({
  hunkukList: computed(() => {
    return [
      { name: '전체', id: 0 },
      ...context.root.$store.getters[`hunkuk/${HunkukConst.$Get.List}`],
    ]
  }),
})

export const useSearchTextWatch = (context: SetupContext) => (text: string) => {
  console.log(context, text)
}

export const useHunkukFilterIdWatch = (context: SetupContext) => (id: number) => {
  context.root.$router.push({
    query: {
      ...context.root.$route.query,
      hunkuk: `${id}`,
    },
  })
}
