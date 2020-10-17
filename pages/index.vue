<template>
  <v-container>
    <v-row class="align-center flex-column">
      <v-col xs="12" sm="10">
        <v-row>
          <v-col xs="12" sm="6" lg="4">
            <person-image :url="todayPerson.imgUrl" />
          </v-col>
          <v-col xs="12" sm="6" lg="8">
            <person-info :item="todayPerson" />
          </v-col>
        </v-row>
      </v-col>
      <v-col xs="12" sm="10">
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
import { defineComponent, onMounted } from '@vue/composition-api'
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

    onMounted(() => {
      const onWindowScroll = (event: any) => {
        console.log(event)
      }

      window.addEventListener('scroll', onWindowScroll)
    })

    return {
      state,
      ...computed,
    }
  },
})
</script>
