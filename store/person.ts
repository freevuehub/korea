import { PersonConst } from '~/Constant'
import { getPersonList, getPersonItem } from '~/API'

interface IPersonDetail {
  achivement: string
  birthDay: string
  deathDay: string
  gender: number
  hunkuk: string
  id: number
  imgUrl: string
  name: string
  work: string
}

interface IState {
  personDetail: IPersonDetail
  personList: any[]
  listTotal: number
}

export const state = () => ({
  personDetail: {
    achivement: '',
    birthDay: '',
    deathDay: '',
    gender: 0,
    hunkuk: '',
    id: 0,
    imgUrl: '',
    name: '',
    work: '',
  },
  personList: [],
  listTotal: 0,
})

export const mutations = {
  [PersonConst.$Set.List]: (state: IState, payload: any) => {
    state.personList = payload
  },
  [PersonConst.$Get.Item]: (state: IState, payload: IPersonDetail) => {
    state.personDetail = payload
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
  [PersonConst.$Call.Item]: async (store: any, id: number) => {
    try {
      const response = await getPersonItem(id)

      store.commit(PersonConst.$Get.Item, response.result)

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
  [PersonConst.$Get.Item](state: IState) {
    return state.personDetail
  },
}
