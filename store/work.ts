import { WorkConst } from '~/Constant'
import { IWorkListItem } from '~/types'

interface IState {
  list: IWorkListItem[] | []
}

export const state = (): IState => ({
  list: [],
})

export const mutations = {
  [WorkConst.$Set.List](state: IState, payload: IWorkListItem[]) {
    state.list = payload
  },
}

export const actions = {
  [WorkConst.$Call.List](store: any, payload: IWorkListItem[]) {
    store.commit(WorkConst.$Set.List, payload)
  },
}

export const getters = {
  [WorkConst.$Get.List](state: IState) {
    return state.list
  },
}
