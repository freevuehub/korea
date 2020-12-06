<template>
  <v-app dark>
    <v-navigation-drawer v-if="isMobile" v-model="state.drawer" fixed app>
      <nav-list></nav-list>
    </v-navigation-drawer>
    <app-bar v-if="isMobile" v-model="state.drawer" />
    <v-app-bar v-else color="primary" dense dark app fixes>
      <v-avatar size="40">
        <img src="/icon.png" alt="" />
      </v-avatar>
      <v-spacer />
      <v-btn text nuxt to="/person">국가유공자 리스트</v-btn>
      <v-btn text nuxt to="/event">역사적인 순간들</v-btn>
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

import { defineComponent, reactive, computed } from '@vue/composition-api'
import dayjs from 'dayjs'
import { NavList, AppBar } from '~/components'

export default defineComponent({
  components: {
    NavList,
    AppBar,
  },
  setup(_, context) {
    const state = reactive({
      year: dayjs().year(),
      drawer: false,
    })
    const isMobile = computed(() => {
      const {
        $vuetify: { breakpoint },
      }: any = context.root

      return breakpoint.smAndDown
    })

    return {
      state,
      isMobile,
    }
  },
})
</script>
