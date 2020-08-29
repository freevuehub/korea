<template>
  <v-app dark>
    <v-navigation-drawer v-model="state.drawer" fixed app>
      <nav-list></nav-list>
    </v-navigation-drawer>
    <app-bar v-model="state.drawer"></app-bar>
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

<style lang="scss">
body {
  max-width: 540px;
  margin: auto;
  background-color: #121212;
}
</style>
