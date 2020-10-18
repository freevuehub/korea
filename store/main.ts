import { MainConst } from '~/Constant'
import { IPersonListItem, IPersonDetail, INameAndImage } from '~/types'

type ITodayAddPerson = IPersonListItem[] | []

interface IState {
  todayAddPerson: ITodayAddPerson
  todayPerson: IPersonDetail
  nameAndImage: INameAndImage
}

export const state = (): IState => ({
  nameAndImage: {
    nameList: [],
    imageList: [],
  },
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
  [MainConst.$Set.TodayPerson](state: IState, payload: IPersonDetail) {
    state.todayPerson = payload
  },
  [MainConst.$Set.TodayAddPerson](state: IState, payload: ITodayAddPerson) {
    state.todayAddPerson = payload
  },
  [MainConst.$Set.NameAndImage](state: IState, payload: INameAndImage) {
    state.nameAndImage = payload
  },
}

export const actions = {
  [MainConst.$Call.Item](store: any, payload: IState) {
    store.commit(MainConst.$Set.TodayPerson, payload.todayPerson)
    store.commit(MainConst.$Set.TodayAddPerson, payload.todayAddPerson)
    store.commit(MainConst.$Set.NameAndImage, payload.nameAndImage)
  },
}

export const getters = {
  [MainConst.$Get.TodayAddPerson](state: IState) {
    return state.todayAddPerson
  },
  [MainConst.$Get.TodayPerson](state: IState) {
    return state.todayPerson
  },
  [MainConst.$Get.NameAndImage](state: IState) {
    return state.nameAndImage
  },
}
