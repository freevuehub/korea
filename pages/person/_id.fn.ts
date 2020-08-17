import { SetupContext, reactive, computed } from '@vue/composition-api'
import dayjs from 'dayjs'
import { PersonConst } from '~/Constant'

export const useState = () =>
  reactive({
    tab: 0,
  })

export const useComputed = (context: SetupContext) =>
  reactive({
    detail: computed(() => {
      const item = context.root.$store.getters[`person/${PersonConst.$Get.Item}`]

      return {
        ...item,
        birthDay: dayjs(item.birthDay).format('YYYY-MM-DD'),
        deathDay: dayjs(item.deathDay).format('YYYY-MM-DD'),
        judgeYear: dayjs(item.judgeYear).format('YYYY'),
      }
    }),
  })

export const useBeforeMount = (context: SetupContext) => async () => {
  try {
    const { $store, $route } = context.root

    await $store.dispatch(`person/${PersonConst.$Call.Item}`, Number($route.params.id))
  } catch (err) {
    console.error(err)
  }
}
