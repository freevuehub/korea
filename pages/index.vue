<template>
  <v-container>
    <h2 class="mb-2">오늘의 인물</h2>
    <person :item="computed.todayPerson" />

    <h2 class="mb-2">오늘 등록된 유공자</h2>
    <add-list v-if="!!computed.todayAddList.length" :list="computed.todayAddList" />
    <v-alert v-else type="info">오늘 등록된 유공자가 없습니다.</v-alert>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useState, useComputed, useMounted } from './index.fn'
import { TodayPersonCard, TodayAddList } from '~/components'

export default defineComponent({
  middleware: ['main'],
  components: {
    person: TodayPersonCard,
    addList: TodayAddList,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    onMounted(useMounted(context))

    return {
      state,
      computed,
    }
  },
})
</script>
