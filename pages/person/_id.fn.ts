import { SetupContext, reactive, computed } from '@vue/composition-api'
import { PersonConst } from '~/Constant'

export const useComputed = (context: SetupContext) =>
  reactive({
    detail: computed(() => {
      return context.root.$store.getters[`person/${PersonConst.$Get.Item}`]
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
