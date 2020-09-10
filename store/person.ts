import { PersonConst } from '~/Constant'
import { getPersonList, getPersonItem } from '~/API'
import { IPersonItem, IPersonListPageData, IPersonDetail } from '~/types'

interface IState {
  personDetail: IPersonDetail
  personList: IPersonItem[]
  listTotal: number
}

export const state = (): IState => ({
  personDetail: {
    achivement: '',
    birthDay: '',
    deathDay: '',
    gender: 0,
    hunkuk: '',
    id: 0,
    clickCount: 0,
    imgUrl: '',
    name: '',
    work: '',
    diffName: '',
    judgeYear: '',
    registerLarge: '',
    registerMid: '',
    birthDayFormat: '',
    deathDayFormat: '',
    imgSourceId: 0,
    achivementSourceId: 0,
  },
  personList: [],
  listTotal: 0,
})

export const mutations = {
  [PersonConst.$Set.List]: (state: IState, payload: any) => {
    state.personList = payload
  },
  [PersonConst.$Set.Item]: (state: IState, payload: IPersonDetail) => {
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

      // const count = response.result.clickCount + 1

      // await putPersonClickCount(id, count)

      store.commit(PersonConst.$Set.Item, response.result)

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
