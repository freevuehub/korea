import { HistoryConst } from '~/Constant'

interface IHistoryItem {
  id: number
  name: string
  contents: string
  imgUrl: string | null
}

interface IState {
  item: IHistoryItem
}

export const state = (): IState => ({
  item: {
    id: 0,
    name: '',
    contents: '',
    imgUrl: null,
  },
})

export const mutations = {
  [HistoryConst.$Set.Item](store: IState, payload: IHistoryItem) {
    store.item = payload
  },
}

export const actions = {
  [HistoryConst.$Call.Item](store: any, payload: IHistoryItem) {
    store.commit(HistoryConst.$Set.Item, payload)
  },
}

export const getters = {
  [HistoryConst.$Get.Item](store: IState) {
    return store.item
  },
}
