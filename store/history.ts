import { HistoryConst } from '~/Constant'
import { getHistoryEventList } from '~/API'
import { IHistoryItem } from '~/types'

interface IState {
  item: IHistoryItem
  list: IHistoryItem[]
}

export const state = (): IState => ({
  item: {
    id: 0,
    name: '',
    date: '',
    contents: '',
    imgUrl: null,
  },
  list: [],
})

export const mutations = {
  [HistoryConst.$Set.Item](store: IState, payload: IHistoryItem) {
    store.item = payload
  },
  [HistoryConst.$Set.List](store: IState, payload: IHistoryItem[]) {
    store.list = payload
  },
}

export const actions = {
  [HistoryConst.$Call.Item](store: any, payload: IHistoryItem) {
    store.commit(HistoryConst.$Set.Item, payload)
  },
  async [HistoryConst.$Call.List](store: any, params: { month: number, year: number }) {
    try {
      const { result } = await getHistoryEventList(params)

      store.commit(HistoryConst.$Set.List, result)
    } catch (error) {
      return Promise.reject(error)
    }
  },
}

export const getters = {
  [HistoryConst.$Get.Item](store: IState) {
    return store.item
  },
  [HistoryConst.$Get.List](store: IState) {
    return store.list
  },
}
