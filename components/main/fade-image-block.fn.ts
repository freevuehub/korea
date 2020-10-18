import { reactive, computed, ComputedRef, SetupContext } from '@vue/composition-api'
import { MainConst } from '~/Constant'
import { INameAndImage } from '~/types'

interface IState {
  number: number
  load: boolean
}

interface IComputedItem {
  personFace: string[]
}

interface IComputed {
  personFace: ComputedRef<string[]>
}

export const useState = () =>
  reactive<IState>({
    number: Math.floor(Math.random() * 120),
    load: false,
  })

export const useComputed = (context: SetupContext) =>
  reactive<IComputed>({
    personFace: computed<string[]>(() => {
      const data: INameAndImage = context.root.$store.getters[`main/${MainConst.$Get.NameAndImage}`]

      return data.imageList
    }),
  })

export const useImageLoad = (state: IState, compute: IComputedItem) => () => {
  const changeImageTimeOut = () => {
    state.number = Math.floor(Math.random() * compute.personFace.length)
  }
  const fadeImageTimeOut = () => {
    state.load = false

    setTimeout(changeImageTimeOut, 1000)
  }

  state.load = true

  setTimeout(fadeImageTimeOut, 5000)
}
