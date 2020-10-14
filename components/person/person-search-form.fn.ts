import { reactive, computed, SetupContext } from '@vue/composition-api'
import { HunkukConst, WorkConst } from '~/Constant'

interface IState {
  searchText: string
  hunkukFilterId: number
  workFilterId: number
}

export const useState = (context: SetupContext) =>
  reactive<IState>({
    searchText: `${context.root.$route.query.name || ''}`,
    hunkukFilterId: Number(context.root.$route.query.hunkuk || 0),
    workFilterId: Number(context.root.$route.query.hunkuk || 0),
  })

export const useComputed = (context: SetupContext) => ({
  hunkukList: computed(() => {
    return [
      { name: '전체', id: 0 },
      ...context.root.$store.getters[`hunkuk/${HunkukConst.$Get.List}`],
    ]
  }),
  workList: computed(() => {
    return [{ name: '전체', id: 0 }, ...context.root.$store.getters[`work/${WorkConst.$Get.List}`]]
  }),
})

export const useNameSearch = (context: SetupContext, state: IState) => () => {
  context.root.$router.push({
    query: {
      ...context.root.$route.query,
      name: state.searchText,
    },
  })
}

export const useHunkukFilterIdWatch = (context: SetupContext) => (id: number) => {
  context.root.$router.push({
    query: {
      ...context.root.$route.query,
      hunkuk: `${id}`,
    },
  })
}
