import { SetupContext, reactive, computed, ComputedRef } from '@vue/composition-api'
import dayjs from 'dayjs'
import { PersonConst, SourceConst } from '~/Constant'
import { IPersonDetail, ISourceDetail } from '~/types'

interface IComputed {
  detail: IPersonDetail
  source: ISourceDetail
}

interface IComputedRef {
  detail: ComputedRef<IPersonDetail>
  source: ComputedRef<ISourceDetail>
}

export const useState = () =>
  reactive({
    tab: 0,
  })

export const useComputed = (context: SetupContext) =>
  reactive<IComputedRef>({
    detail: computed(() => {
      const item: IPersonDetail = context.root.$store.getters[`person/${PersonConst.$Get.Item}`]

      return {
        ...item,
        birthDay: item.birthDay ? dayjs(item.birthDay).format(item.birthDayFormat) : '미상',
        deathDay: item.deathDay ? dayjs(item.deathDay).format(item.deathDayFormat) : '미상',
        judgeYear: dayjs(item.judgeYear).format('YYYY'),
      }
    }),
    source: computed(() => {
      const item = context.root.$store.getters[`source/${SourceConst.$Get.Item}`]

      return item
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

export const useDetailWatch = (context: SetupContext, computed: IComputed) => async () => {
  try {
    const { $store } = context.root
    const { imgSourceId, achivementSourceId } = computed.detail

    await $store.dispatch(`source/${SourceConst.$Call.Item}`, { imgSourceId, achivementSourceId })
  } catch (err) {
    console.error(err)
  }
}
