<template>
  <v-app dark>
    <v-app-bar color="primary" dense dark app fixes>
      <v-avatar>
        <img src="/icon.png" alt="" />
      </v-avatar>
      <v-spacer />
      <v-btn text nuxt to="/person">국가유공자 리스트</v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer fixed app class="pa-3">
      <strong class="mr-3">FreeVue</strong>
      Copyright &copy; {{ state.year }}.
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import 'vuetify/dist/vuetify.min.css'

import { defineComponent, reactive } from '@vue/composition-api'
import dayjs from 'dayjs'
import { NavList, AppBar } from '~/components'

export default defineComponent({
  components: {
    NavList,
    AppBar,
  },
  setup() {
    const state = reactive({
      year: dayjs().year(),
      drawer: false,
    })

    return {
      state,
    }
  },
})
</script>
