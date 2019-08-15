import { getList, getNewList } from '~/API';
import { MainConst, SystemConst } from '~/Constant';
import { ActionTree, MutationTree } from 'vuex'

interface IMainState {
  list: string[]
  snackStatus: {
    view: boolean
    msg: string
  }
}

interface IMainModel {
  list: string[]
  snackStatus: {
    view: boolean
    msg: string
  }
}

export const state = (): IMainState => ({
  list: [],
  snackStatus: {
    view: false,
    msg: ''
  }
});

export const mutations: MutationTree<IMainState> = {
  [MainConst.$Set.List]: (state, payload) => {
    state.list = [
      ...payload
    ]
  },
  [SystemConst.$Set.Status]: (state, payload) => {
    state.snackStatus = {
      ...state.snackStatus,
      ...payload
    };
  },
};

export const getters = {
  [MainConst.$Get.List]: ({ list }) => list,
  [SystemConst.$Get.Status]: ({ snackStatus }) => snackStatus,
};

export const actions: ActionTree<IMainState, IMainModel> = {
  [MainConst.$Call.List]: (store) => new Promise(async (resolve, reject) => {
    try {
      const { data } = await getList();
      const { items } = data;

      store.commit(MainConst.$Set.List, items.list);
      
      const a = await getNewList();

      console.log(a);

      return resolve(data);
    } catch(e) {
      console.error('===== MainConst.$Call.List Error =====');
      
      return reject(e);
    }
  }),
  [SystemConst.$Call.Status]: (store, model) => new Promise(resolve => {
    store.commit(SystemConst.$Set.Status, model);

    return resolve();
  }),
};