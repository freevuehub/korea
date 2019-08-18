import { getIdx, getNewList, addData } from '~/API';
import { KoreaConst, SystemConst } from '~/Constant';
import { ActionTree, MutationTree } from 'vuex'

interface IMainState {
  list: string[]
  snackStatus: {
    view: boolean
    msg: string
  },
  idx: {},
  loading: {
    head: boolean
  }
  scTop: number
}

interface IMainModel {
  list: string[]
  snackStatus: {
    view: boolean
    msg: string
  }
  idx: {},
  loading: {
    head: boolean
  }
  scTop: number
}

export const state = (): IMainState => ({
  list: [],
  snackStatus: {
    view: false,
    msg: ''
  },
  idx: {},
  loading: {
    head: false
  },
  scTop: 0
});

export const mutations: MutationTree<IMainState> = {
  [KoreaConst.$Set.List]: (state, payload) => {
    state.list = [
      ...payload
    ]
  },
  [KoreaConst.$Set.Idx]: (state, payload) => {
    state.idx = {
      ...payload
    };
  },
  [SystemConst.$Set.Status]: (state, payload) => {
    state.snackStatus = {
      ...state.snackStatus,
      ...payload
    };
  },
  [SystemConst.$Set.Loading]: (state, payload) => {
    state.loading = {
      ...state.loading,
      ...payload
    };
  },
  [SystemConst.$Set.ScTop]: (state, payload) => {
    state.scTop = payload;
  }
};

export const getters = {
  [KoreaConst.$Get.List]: ({ list }) => list,
  [SystemConst.$Get.Status]: ({ snackStatus }) => snackStatus,
  [KoreaConst.$Get.Idx]: ({ idx }) => idx,
  [SystemConst.$Get.Loading]: ({ loading }) => loading,
  [SystemConst.$Get.ScTop]: ({ scTop }) => scTop,
};

export const actions: ActionTree<IMainState, IMainModel> = {
  [SystemConst.$Call.Status]: (store, model) => new Promise(resolve => {
    store.commit(SystemConst.$Set.Status, model);

    return resolve();
  }),
  [SystemConst.$Call.Loading]: (store, model) => new Promise(resolve => {
    store.commit(SystemConst.$Set.Loading, model);

    return resolve();
  }),
  [SystemConst.$Call.ScTop]: (store, model) => new Promise(resolve => {
    store.commit(SystemConst.$Set.ScTop, model);

    return resolve();
  }),
  [KoreaConst.$Call.List]: (store) => new Promise(async (resolve, reject) => {
    if (!!store.state.list.length) return resolve();

    try {
      const all = await Promise.all([
        getNewList('PSG00002'),
        getNewList('PSG00003')
      ]);
      
      store.commit(
        KoreaConst.$Set.List,
        all.reduce(
          (p, { data }) => [
            ...p,
            ...data.list
          ], []
        )
      );

      return resolve(all);
    } catch(e) {
      console.error('===== KoreaConst.$Call.List Error =====');
      
      return reject(e);
    }
  }),
  [KoreaConst.$Call.AddData]: (store, model) => new Promise(async (resolve, reject) => {
    try {
      await addData(model.key, model.form);

      return resolve();
    } catch(e) {
      console.error('===== KoreaConst.$Call.AddData Error =====');

      return reject(e);
    }
  }),
  [KoreaConst.$Call.Idx]: (store, model) => new Promise(async (resolve, reject) => {
    try {
      const { data } = await getIdx(model.id, model.key);
      
      store.commit(KoreaConst.$Set.Idx, data.item);

      return resolve();
    } catch(e) {
      console.error('===== KoreaConst.$Call.Idx =====');

      return reject(e);
    }
  })
};