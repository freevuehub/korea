import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import { MainConst } from '~/Constant'
import { IPersonListItem, IPersonDetail, INameAndImage } from '~/types'

interface IState {
  achivementShow: boolean
  todayPersonImageView: boolean
  todayPersonInfoView: boolean
}

export const useState = () =>
  reactive<IState>({
    achivementShow: false,
    todayPersonImageView: false,
    todayPersonInfoView: false,
  })

export const useComputed = (context: SetupContext) => ({
  todayAddList: computed(() => {
    const personList = context.root.$store.getters[`main/${MainConst.$Get.TodayAddPerson}`]

    return personList.map((item: IPersonListItem) => ({
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
      judgeYear: dayjs(personDetail.judgeYear).format('YYYY'),
    }
  }),
  personFaces: computed(() => {
    const data: INameAndImage = context.root.$store.getters[`main/${MainConst.$Get.NameAndImage}`]

    return data
  }),
  isMobile: computed(() => {
    const {
      $vuetify: { breakpoint },
    }: any = context.root

    return breakpoint.smAndDown
  }),
})

export const useIsMobileWatch = (state: IState) => (value: boolean) => {
  if (value) {
    state.todayPersonImageView = false
    state.todayPersonInfoView = false
  }
}
