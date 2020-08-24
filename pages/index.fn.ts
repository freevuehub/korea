import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import { MainConst } from '~/Constant'
import { IPersonItem } from '~/types'

export const useComputed = (context: SetupContext) =>
  reactive({
    todayAddList: computed(() => {
      const personList = context.root.$store.getters[`main/${MainConst.$Get.TodayAddPerson}`]

      return personList.map((item: IPersonItem) => ({
        ...item,
        birthDay: item.birthDay ? dayjs(item.birthDay).format(item.birthDayFormat) : '미상',
        deathDay: item.deathDay ? dayjs(item.deathDay).format(item.deathDayFormat) : '미상',
      }))
    }),
  })

export const useMounted = (context: SetupContext) => () => {
  context.root.$store.dispatch(`main/${MainConst.$Call.Item}`)
}
