<template>
  <v-list class="pt-0">
    <v-list-item v-for="item in state.menu" :key="item.to" :to="item.to" router exact>
      <v-list-item-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title v-text="item.title" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
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
        {
          icon: 'today',
          title: '오늘의 인물 리스트',
          to: '/today-person',
        },
      ],
    })

    return {
      state,
    }
  },
})
</script>
