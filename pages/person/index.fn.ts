import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import { PersonConst } from '~/Constant'
import { IPersonListItem, IPersonListPageData } from '~/types'

export const useState = (context: SetupContext) =>
  reactive<IPersonListPageData>({
    page: Number(context.root.$route.query.page || 1),
    limit: 10,
  })

export const useComputed = (context: SetupContext) => ({
  personList: computed(() => {
    const list = context.root.$store.getters[`person/${PersonConst.$Get.List}`]

    return list.map((person: IPersonListItem) => ({
      ...person,
      birthDay: person.birthDay ? dayjs(person.birthDay).format(person.birthDayFormat) : '미상',
      deathDay: person.deathDay ? dayjs(person.deathDay).format(person.deathDayFormat) : '미상',
    }))
  }),
  total: computed(() => {
    return context.root.$store.getters[`person/${PersonConst.$Get.Total}`]
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
