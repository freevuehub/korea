import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import { MainConst } from '~/Constant'
import { IPersonItem, IPersonDetail } from '~/types'

export const useState = () =>
  reactive({
    achivementShow: false,
  })

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
    todayPerson: computed(() => {
      const personDetail: IPersonDetail =
        context.root.$store.getters[`main/${MainConst.$Get.TodayPerson}`]

      return {
        ...personDetail,
        birthDay: personDetail.birthDay
          ? dayjs(personDetail.birthDay).format(personDetail.birthDayFormat)
          : '미상',
        deathDay: personDetail.deathDay
          ? dayjs(personDetail.deathDay).format(personDetail.deathDayFormat)
          : '미상',
      }
    }),
  })

export const useMounted = (context: SetupContext) => () => {
  context.root.$store.dispatch(`main/${MainConst.$Call.Item}`)
}
