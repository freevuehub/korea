import { MainConst } from '~/Constant'
import { IPersonListItem, IPersonDetail } from '~/types'

type ITodayAddPerson = IPersonListItem[] | []

interface IState {
  todayAddPerson: ITodayAddPerson
  todayPerson: IPersonDetail
}

export const state = (): IState => ({
  todayAddPerson: [],
  todayPerson: {
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
})

export const mutations = {
  [MainConst.$Set.TodayPerson](store: IState, payload: IPersonDetail) {
    store.todayPerson = payload
  },
  [MainConst.$Set.TodayAddPerson](store: IState, payload: ITodayAddPerson) {
    store.todayAddPerson = payload
  },
}

export const actions = {
  [MainConst.$Call.Item](store: any, payload: IState) {
    store.commit(MainConst.$Set.TodayPerson, payload.todayPerson)
    store.commit(MainConst.$Set.TodayAddPerson, payload.todayAddPerson)
  },
}

export const getters = {
  [MainConst.$Get.TodayAddPerson](store: IState) {
    return store.todayAddPerson
  },
  [MainConst.$Get.TodayPerson](store: IState) {
    return store.todayPerson
  },
}
