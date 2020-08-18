import { SourceConst } from '~/Constant'
import { getSourceDetail } from '~/API'
import { ISourceDetail } from '~/types'

interface IState {
  sourceDetail: ISourceDetail
}

interface ISourceIdObj {
  imgSourceId: number
  achivementSourceId: number
}

export const state = (): IState => {
  const common = {
    id: 0,
    name: '',
    url: '',
  }

  return {
    sourceDetail: {
      imgSource: common,
      achivementSource: common,
    },
  }
}

export const mutations = {
  [SourceConst.$Set.Item]: (state: IState, payload: ISourceDetail) => {
    state.sourceDetail = payload
  },
}

export const actions = {
  [SourceConst.$Call.Item]: async (
    store: any,
    { imgSourceId, achivementSourceId }: ISourceIdObj
  ) => {
    try {
      const [{ result: imgSource }, { result: achivementSource }] = await Promise.all([
        getSourceDetail(imgSourceId),
        getSourceDetail(achivementSourceId),
      ])

      store.commit(SourceConst.$Set.Item, { imgSource, achivementSource })

      return { imgSource, achivementSource }
    } catch (err) {
      return err
    }
  },
}

export const getters = {
  [SourceConst.$Get.Item](state: IState) {
    return state.sourceDetail
  },
}
