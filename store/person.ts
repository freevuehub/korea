import { PersonConst } from '~/Constant'
import { getPersonList, getPersonItem } from '~/API'
import { IPersonItem, IPersonListPageData } from '~/types'

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
  personList: IPersonItem[]
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
  [PersonConst.$Set.Total]: (state: IState, payload: number) => {
    state.listTotal = payload
  },
}

export const actions = {
  [PersonConst.$Call.List]: async (store: any, { page, limit }: IPersonListPageData) => {
    try {
      const response = await getPersonList(page, limit)

      store.commit(PersonConst.$Set.List, response.result)
      store.commit(PersonConst.$Set.Total, response.totalCount)

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
  [PersonConst.$Get.Total](state: IState) {
    return state.listTotal
  },
}
