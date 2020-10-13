<template>
  <v-container>
    <v-row>
      <v-col sm="6" lg="4" xl="3">
        <person-image :url="todayPerson.imgUrl" />
        <person-info :item="todayPerson" />
      </v-col>
      <v-col sm="6" lg="4" xl="3">
        <h2 class="mb-2">오늘 등록된 유공자</h2>
        <add-list v-if="!!todayAddList.length" :list="todayAddList" />
        <v-alert v-else :class="$round" elevation="10" type="info">
          오늘 등록된 유공자가 없습니다.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useState, useComputed } from './index.fn'
import { TodayAddList, TodayPersonImgCard, TodayPersonInfoCard } from '~/components'

export default defineComponent({
  middleware: ['main'],
  layout: 'main',
  components: {
    personImage: TodayPersonImgCard,
    personInfo: TodayPersonInfoCard,
    addList: TodayAddList,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    return {
      state,
      ...computed,
    }
  },
})
</script>
