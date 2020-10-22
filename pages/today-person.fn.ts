import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import { TodayPersonConst } from '~/Constant'
import { ITodayPersonListItem, IPersonListPageData } from '~/types'

export const useState = (context: SetupContext) =>
  reactive<IPersonListPageData>({
    page: Number(context.root.$route.query.page || 1),
    limit: 10,
  })

export const useComputed = (context: SetupContext) => ({
  personList: computed(() => {
    const listMap = (person: ITodayPersonListItem) => ({
      ...person,
      date: dayjs(person.date).format('YYYY-MM-DD'),
      birthDay: dayjs(person.birthDay).format('YYYY-MM-DD'),
      deathDay: dayjs(person.deathDay).format('YYYY-MM-DD'),
    })
    const list = context.root.$store.getters[`todayPerson/${TodayPersonConst.$Get.List}`]

    return list.map(listMap)
  }),
  upLoadingStatus: computed(() => {
    return !context.root.$route.query.page || Number(context.root.$route.query.page) !== 1
  }),
  downLoadingStatus: computed(() => {
    const count = context.root.$store.getters[`todayPerson/${TodayPersonConst.$Get.Count}`]

    return Number(context.root.$route.query.page) !== Math.ceil(count / 10)
  }),
})

export const useBeforeMount = (context: SetupContext) => () => {
  if (!context.root.$route.query.page) {
    context.root.$router.push({
      query: {
        ...context.root.$route.query,
        page: '1',
      },
    })
  }
}

export const usePageWatch = (context: SetupContext) => (page: number) => {
  context.root.$router.push({ query: { page: `${page}` } })

  window.scrollTo(0, 0)
}
