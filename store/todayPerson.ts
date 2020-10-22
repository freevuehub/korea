import { TodayPersonConst } from '~/Constant'
import { ITodayPersonListItem } from '~/types'

interface IPayload {
  result: ITodayPersonListItem[]
}

interface IState {
  list: ITodayPersonListItem[] | []
  downLoading: boolean
}

export const state = (): IState => ({
  list: [],
  downLoading: true,
})

export const mutations = {
  [TodayPersonConst.$Set.List](state: IState, payload: ITodayPersonListItem[]) {
    state.list = [...state.list, ...payload]
  },
  [TodayPersonConst.$Set.DownLoading](state: IState, payload: boolean) {
    state.downLoading = payload
  },
}

export const actions = {
  [TodayPersonConst.$Call.List](store: any, payload: IPayload) {
    if (payload.result.length) {
      store.commit(TodayPersonConst.$Set.List, payload.result)
    } else {
      store.commit(TodayPersonConst.$Set.DownLoading, false)
    }
  },
}

export const getters = {
  [TodayPersonConst.$Get.List](state: IState) {
    return state.list
  },
  [TodayPersonConst.$Get.DownLoading](state: IState) {
    return state.downLoading
  },
}
