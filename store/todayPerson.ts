import { TodayPersonConst } from '~/Constant'
import { ITodayPersonListItem } from '~/types'

interface IState {
  list: ITodayPersonListItem[] | []
  count: number
}

export const state = (): IState => ({
  list: [],
  count: 0,
})

export const mutations = {
  [TodayPersonConst.$Set.List](state: IState, payload: ITodayPersonListItem[]) {
    state.list = [...state.list, ...payload]
  },
  [TodayPersonConst.$Set.Count](state: IState, payload: number) {
    state.count = payload
  },
}

export const actions = {
  [TodayPersonConst.$Call.List](store: any, payload: ITodayPersonListItem[]) {
    store.commit(TodayPersonConst.$Set.List, payload)
  },
  [TodayPersonConst.$Call.Count](store: any, payload: number) {
    store.commit(TodayPersonConst.$Set.Count, payload)
  },
}

export const getters = {
  [TodayPersonConst.$Get.List](state: IState) {
    return state.list
  },
  [TodayPersonConst.$Get.Count](state: IState) {
    return state.count
  },
}
