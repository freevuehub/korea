<template>
  <v-container fluid>
    <v-row class="align-center flex-column pa-0">
      <v-col xs="12" sm="10" md="10" lg="8" class="py-0 mb-5">
        <v-row
          ref="today-person"
          :class="['align-start', 'person-info', 'py-0', { 'flex-column': isMobile }]"
        >
          <v-col xs="12" sm="5" class="thumb" :class="{ pc: !isMobile }">
            <person-image :url="todayPerson.imgUrl" />
          </v-col>
          <v-col xs="12" sm="7">
            <person-info :item="todayPerson" />
            <v-card v-if="!isMobile" :class="$round" elevation="10">
              <achivement :achivement="todayPerson.achivement" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col xs="12" sm="10" md="10" lg="8" class="py-0 mb-5">
        <v-row
          ref="today-person"
          :class="['align-start', 'person-info', 'py-0', { 'flex-column': isMobile }]"
        >
          <v-col xs="12" sm="7">
            <v-card :class="[$round, 'mb-5']" elevation="10">
              <v-card-title>{{ todayHistoryEvent.name }}</v-card-title>
            </v-card>
            <v-card v-if="!isMobile" :class="$round" elevation="10">
              <v-card-text>
                <md-render :markdown="todayHistoryEvent.contents" />
              </v-card-text>
            </v-card>
          </v-col>
          <v-col xs="12" sm="5" class="thumb" :class="{ pc: !isMobile }">
            <person-image :url="todayHistoryEvent.imgUrl" />
          </v-col>
        </v-row>
      </v-col>
      <v-col xs="12" sm="10" md="10" lg="8" class="py-0">
        <v-row :class="['py-0', { 'flex-column': isMobile }]">
          <v-col xs="12" sm="12">
            <v-card href="https://e-gonghun.mpva.go.kr/user/index.do" target="_blank">
              <v-img src="https://e-gonghun.mpva.go.kr/comm/img/logo-2019.png" />
            </v-card>
          </v-col>
          <v-col xs="12" sm="6">
            <v-card href="https://www.buymeacoffee.com/freevue" target="_blank">
              <v-img
                class="white--text align-end"
                height="260"
                src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg"
              >
                <v-card-title>Buy Me a Coffee!</v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col xs="12" sm="6">
            <v-card href="https://www.youtube.com/channel/UCkZCZu6eLLDGiuVr5O3awgw" target="_blank">
              <v-img
                class="black--text align-end"
                height="260"
                src="https://cdn.pixabay.com/photo/2016/09/21/11/31/youtube-1684601_960_720.png"
              >
                <v-card-title>Go to YouTube</v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api'
import { useState, useComputed, useIsMobileWatch } from './index.fn'
import {
  TodayPersonImgCard,
  TodayPersonInfoCard,
  DetailAchivement,
  PersonListCardItem,
  MarkdownRender,
} from '~/components'

export default defineComponent({
  middleware: ['main'],
  layout: 'main',
  components: {
    personImage: TodayPersonImgCard,
    personInfo: TodayPersonInfoCard,
    achivement: DetailAchivement,
    person: PersonListCardItem,
    mdRender: MarkdownRender,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

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
  .thumb {
    &.pc {
      position: sticky;
      top: 58px;
    }
  }
}
</style>
