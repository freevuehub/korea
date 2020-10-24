import { getTodayList } from '~/API'
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
    state.list = payload
  },
  [TodayPersonConst.$Set.Count](state: IState, payload: number) {
    state.count = payload
  },
  [TodayPersonConst.$Set.UpList](state: IState, payload: ITodayPersonListItem[]) {
    state.list = [...payload, ...state.list]
  },
  [TodayPersonConst.$Set.DownList](state: IState, payload: ITodayPersonListItem[]) {
    state.list = [...state.list, ...payload]
  },
}

export const actions = {
  [TodayPersonConst.$Call.List](store: any, payload: ITodayPersonListItem[]) {
    store.commit(TodayPersonConst.$Set.List, payload)
  },
  [TodayPersonConst.$Call.Count](store: any, payload: number) {
    store.commit(TodayPersonConst.$Set.Count, payload)
  },
  async [TodayPersonConst.$Call.UpList](store: any, page: number) {
    const { result } = await getTodayList(page, 10)

    store.commit(TodayPersonConst.$Set.UpList, result)
  },
  async [TodayPersonConst.$Call.DownList](store: any, page: number) {
    const { result } = await getTodayList(page, 10)

    store.commit(TodayPersonConst.$Set.DownList, result)
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
