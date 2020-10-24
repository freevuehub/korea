import { reactive, computed, ComputedRef, SetupContext } from '@vue/composition-api'
import { MainConst } from '~/Constant'
import { INameAndImage } from '~/types'

interface IState {
  number: number
  load: boolean
}

interface IComputedItem {
  personName: string[]
}

interface IComputed {
  personName: ComputedRef<string[]>
  personFace: ComputedRef<string[]>
}

export const useState = () =>
  reactive<IState>({
    number: Math.floor(Math.random() * 120),
    load: false,
  })

export const useComputed = (context: SetupContext) =>
  reactive<IComputed>({
    personName: computed<string[]>(() => {
      const data: INameAndImage = context.root.$store.getters[`main/${MainConst.$Get.NameAndImage}`]

      return data.nameList
    }),
    personFace: computed<string[]>(() => {
      const data: INameAndImage = context.root.$store.getters[`main/${MainConst.$Get.NameAndImage}`]

      return data.imageList
    }),
  })
