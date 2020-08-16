<template>
  <v-app dark>
    <v-navigation-drawer v-model="state.drawer" fixed app>
      <v-list>
        <v-list-item v-for="item in state.menu" :key="item.to" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="primary" dense dark app fixes>
      <v-app-bar-nav-icon @click.stop="state.drawer = !state.drawer" />
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
      drawer: false,
      menu: [
        {
          icon: 'home',
          title: '메인 페이지',
          to: '/',
        },
        {
          icon: 'timelapse',
          title: '국가유공자 리스트',
          to: '/person',
        },
      ],
    })

    return {
      state,
    }
  },
})
</script>
