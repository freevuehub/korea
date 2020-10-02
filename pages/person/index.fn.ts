import { reactive, computed, SetupContext } from '@vue/composition-api'
import dayjs from 'dayjs'
import { PersonConst } from '~/Constant'
import { IPersonItem, IPersonListPageData } from '~/types'

const loadList = async (context: SetupContext, { page, limit }: IPersonListPageData) => {
  await context.root.$store.dispatch(`person/${PersonConst.$Call.List}`, { page, limit })
}

export const useState = (context: SetupContext) =>
  reactive<IPersonListPageData>({
    page: Number(context.root.$route.query.page || 1),
    limit: 10,
    searchText: '',
  })

export const useComputed = (context: SetupContext) =>
  reactive({
    personList: computed(() => {
      const list = context.root.$store.getters[`person/${PersonConst.$Get.List}`]

      return list.map((person: IPersonItem) => ({
        ...person,
        birthDay: person.birthDay ? dayjs(person.birthDay).format(person.birthDayFormat) : '미상',
        deathDay: person.deathDay ? dayjs(person.deathDay).format(person.deathDayFormat) : '미상',
      }))
    }),
    total: computed(() => {
      return context.root.$store.getters[`person/${PersonConst.$Get.Total}`]
    }),
  })

export const useBeforeMount = (context: SetupContext, state: IPersonListPageData) => async () => {
  if (context.root.$route.query.page) {
    await loadList(context, state)
  } else {
    context.root.$router.push({
      query: { page: '1' },
    })
  }
}

export const usePageWatch = (context: SetupContext, state: IPersonListPageData) => async (
  page: number
) => {
  context.root.$router.push({ query: { page: `${page}` } })

  window.scrollTo(0, 0)

  await loadList(context, state)
}
