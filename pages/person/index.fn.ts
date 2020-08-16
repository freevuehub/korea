import { reactive, computed, SetupContext } from '@vue/composition-api'
import { PersonConst } from '~/Constant'

export const useComputed = (context: SetupContext) =>
  reactive({
    personList: computed(() => {
      return context.root.$store.getters[`person/${PersonConst.$Get.List}`]
    }),
  })

export const useBeforeMount = (context: SetupContext) => async () => {
  try {
    await context.root.$store.dispatch(`person/${PersonConst.$Call.List}`)
  } catch (err) {
    console.error(err)
  }
}
