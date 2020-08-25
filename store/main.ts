import { MainConst } from '~/Constant'
import { getMainData } from '~/API'
import { IPersonItem, IPersonDetail } from '~/types'

interface IState {
  todayAddPerson: IPersonItem[] | []
  todayPerson: IPersonDetail
}

export const state = () => ({
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
  [MainConst.$Set.Item](state: IState, payload: IState) {
    state.todayAddPerson = payload.todayAddPerson
    state.todayPerson = payload.todayPerson
  },
}

export const actions = {
  async [MainConst.$Call.Item](store: any) {
    const { todayAddPerson, todayPerson } = await getMainData()

    store.commit(MainConst.$Set.Item, { todayAddPerson, todayPerson })
  },
}

export const getters = {
  [MainConst.$Get.TodayAddPerson](state: IState) {
    return state.todayAddPerson
  },
  [MainConst.$Get.TodayPerson](state: IState) {
    return state.todayPerson
  },
}
