<template>
  <v-container fluid>
    <face-grid v-if="!isMobile" />
    <v-row class="align-center flex-column pa-0">
      <v-col xs="12" sm="10" md="10" lg="8" class="py-0">
        <v-row ref="today-person" class="flex-column align-center person-info py-0">
          <v-col v-if="!isMobile" xs="12">
            <h1 class="mt-10 mb-5 text-center">오늘의 인물</h1>
          </v-col>
          <v-col
            xs="12"
            sm="4"
            class="thumb"
            :class="{ on: state.todayPersonImageView, 'mb-10': !isMobile }"
          >
            <person-image :url="todayPerson.imgUrl" />
          </v-col>
          <v-col
            xs="12"
            sm="4"
            class="information"
            :class="{ on: state.todayPersonImageView, 'mb-5': !isMobile }"
          >
            <person-info :item="todayPerson" />
          </v-col>
          <v-col v-if="!isMobile" xs="12" sm="4">
            <v-card :class="$round" elevation="10">
              <achivement :achivement="todayPerson.achivement" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col xs="12" sm="10" md="10" lg="8">
        <h1 :class="{ 'mt-10': !isMobile, 'mb-5': !isMobile, textCenter: !isMobile }">
          오늘 등록된 유공자
        </h1>
        <add-list v-if="!!todayAddList.length" :list="todayAddList" />
        <v-alert v-else :class="$round" elevation="10" type="info">
          오늘 등록된 유공자가 없습니다.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from '@vue/composition-api'
import { useState, useComputed, useMounted, useIsMobileWatch } from './index.fn'
import {
  TodayAddList,
  TodayPersonImgCard,
  TodayPersonInfoCard,
  FaceGrid,
  DetailAchivement,
} from '~/components'

export default defineComponent({
  middleware: ['main'],
  layout: 'main',
  components: {
    personImage: TodayPersonImgCard,
    personInfo: TodayPersonInfoCard,
    addList: TodayAddList,
    FaceGrid,
    achivement: DetailAchivement,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    onMounted(useMounted(context, state))

    watch(() => computed.isMobile.value, useIsMobileWatch(state))

    return {
      state,
      ...computed,
    }
  },
})
</script>

<style lang="scss" scoped>
.person-info {
  .information,
  .thumb {
    transform: translateX(0%);
    transition: transform 0.3s ease;
    &.on {
      position: sticky;
      top: 60px;
    }
  }
  .thumb {
    &.on {
      transform: translateX(-100%) translateY(30px);
    }
  }
  .information {
    &.on {
      transform: translateX(100%) translateY(30px);
    }
  }
}
</style>
