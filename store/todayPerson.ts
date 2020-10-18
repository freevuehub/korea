import { TodayPersonConst } from '~/Constant'
import { ITodayPersonListItem } from '~/types'

interface IPayload {
  result: ITodayPersonListItem[]
}

interface IState {
  list: ITodayPersonListItem[] | []
}

export const state = (): IState => ({
  list: [],
})

export const mutations = {
  [TodayPersonConst.$Set.List](state: IState, payload: ITodayPersonListItem[]) {
    state.list = payload
  },
}

export const actions = {
  [TodayPersonConst.$Call.List](store: any, payload: IPayload) {
    store.commit(TodayPersonConst.$Set.List, payload.result)
  },
}

export const getters = {
  [TodayPersonConst.$Get.List](state: IState) {
    return state.list
  },
}
