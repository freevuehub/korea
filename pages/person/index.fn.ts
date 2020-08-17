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
  })

export const useComputed = (context: SetupContext) =>
  reactive({
    personList: computed(() => {
      const list = context.root.$store.getters[`person/${PersonConst.$Get.List}`]

      return list.map((person: IPersonItem) => ({
        ...person,
        birthDay: dayjs(person.birthDay).format('YYYY-MM-DD'),
        deathDay: dayjs(person.deathDay).format('YYYY-MM-DD'),
      }))
    }),
    total: computed(() => {
      return context.root.$store.getters[`person/${PersonConst.$Get.Total}`]
    }),
  })

export const useBeforeMount = (context: SetupContext, state: IPersonListPageData) => async () => {
  try {
    await loadList(context, state)
  } catch (err) {
    console.error(err)
  }
}

export const usePageWatch = (context: SetupContext, state: IPersonListPageData) => async (
  page: number
) => {
  context.root.$router.push({ query: { page: `${page}` } })

  await loadList(context, state)
}
