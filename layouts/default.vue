<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer absolute app class="pa-3">
      <strong class="mr-3">FreeVue</strong>
      Copyright &copy; {{ state.year }}.
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import 'vuetify/dist/vuetify.min.css'

import { defineComponent, reactive } from '@vue/composition-api'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    const state = reactive({
      year: dayjs().year(),
    })

    return {
      state,
    }
  },
})
</script>
