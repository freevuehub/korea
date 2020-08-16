import { PersonConst } from '~/Constant'
import { getPersonList } from '~/API'

interface IState {
  personList: any[]
  listTotal: number
}

export const state = () => ({
  personList: [],
  listTotal: 0,
})

export const mutations = {
  [PersonConst.$Set.List]: (state: IState, payload: any) => {
    state.personList = payload
  },
}

export const actions = {
  [PersonConst.$Call.List]: async (store: any) => {
    try {
      const response = await getPersonList(1, 2)

      store.commit(PersonConst.$Set.List, response.result)

      return response
    } catch (err) {
      return err
    }
  },
}

export const getters = {
  [PersonConst.$Get.List](state: IState) {
    return state.personList
  },
}
