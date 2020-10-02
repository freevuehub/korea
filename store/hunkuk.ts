import { HunkukConst } from '~/Constant'
import { IHunkukListItem } from '~/types'

interface IState {
  list: IHunkukListItem[] | []
}

export const state = (): IState => ({
  list: [],
})

export const mutations = {
  [HunkukConst.$Set.List](state: IState, payload: IHunkukListItem[]) {
    state.list = payload
  },
}

export const actions = {
  [HunkukConst.$Call.List](store: any, payload: IHunkukListItem[]) {
    store.commit(HunkukConst.$Set.List, payload)
  },
}

export const getters = {
  [HunkukConst.$Get.List](state: IState) {
    return state.list
  },
}
