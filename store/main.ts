import { MainConst } from '~/Constant'
import { getMainData } from '~/API'
import { IPersonItem } from '~/types'

interface IState {
  todayAddPerson: IPersonItem[] | []
}

export const state = () => ({
  todayAddPerson: [],
})

export const mutations = {
  [MainConst.$Set.Item](state: IState, payload: IState) {
    state.todayAddPerson = payload.todayAddPerson
  },
}

export const actions = {
  async [MainConst.$Call.Item](store: any) {
    const { todayAddPerson } = await getMainData()

    store.commit(MainConst.$Set.Item, { todayAddPerson })
  },
}

export const getters = {
  [MainConst.$Get.TodayAddPerson](state: IState) {
    return state.todayAddPerson
  },
}
