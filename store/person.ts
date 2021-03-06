import { PersonConst } from '~/Constant'
import { IPersonListItem, IPersonDetail } from '~/types'

interface IState {
  personDetail: IPersonDetail
  personList: IPersonListItem[] | []
  listTotal: number
}

interface IPersonListResponse {
  result: IPersonListItem[] | []
  totalCount: number
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
  [PersonConst.$Set.List]: (state: IState, payload: IPersonListItem[] | []) => {
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
  [PersonConst.$Call.List]: (store: any, payload: IPersonListResponse) => {
    store.commit(PersonConst.$Set.List, payload.result)
    store.commit(PersonConst.$Set.Total, payload.totalCount)
  },
  [PersonConst.$Call.Item]: (store: any, payload: IPersonDetail) => {
    store.commit(PersonConst.$Set.Item, payload)
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
