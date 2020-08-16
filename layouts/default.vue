<template>
  <v-app dark>
    <v-app-bar color="primary" dense dark app fixes>
      <v-app-bar-nav-icon />
      <v-spacer />
      <v-toolbar-title v-text="'기억하겠습니다.'" />
    </v-app-bar>
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
